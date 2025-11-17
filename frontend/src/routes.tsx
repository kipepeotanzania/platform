import { lazy, type ComponentType } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import site from '../site.map.json';
import MainLayout from './layouts/MainLayout';

const pageModules = import.meta.glob('./pages/**/*.tsx');

function loadPage(componentPath: string) {
  const normalized = `./${componentPath}`.replace(/\/+/g, '/');
  const loader = pageModules[normalized];

  if (!loader) {
    throw new Error(`No se encontró el componente para ${normalized}`);
  }

  return lazy(() => loader() as Promise<{ default: ComponentType<any> }>);
}

function cleanSegment(segment: string | undefined, isRoot: boolean) {
  if (!segment || segment === '/') {
    return isRoot ? '/' : '';
  }
  return segment.replace(/^\/+/g, '').replace(/\/+$/g, '');
}

function buildFullPath(parent: string, segment: string) {
  if (!parent || parent === '/') {
    return segment ? `/${segment}`.replace(/\/+/g, '/') : '/';
  }
  if (!segment) {
    return parent;
  }
  return `${parent}/${segment}`.replace(/\/+/g, '/');
}

function nodeToRoute(node: any, parentFullPath = '', wrapWithLayout = true) {
  const isRoot = parentFullPath === '';
  const segment = cleanSegment(node.path, isRoot);
  const path = isRoot ? segment : segment || '';
  const fullPath = isRoot ? segment : buildFullPath(parentFullPath, segment);
  const Component = node.component ? loadPage(node.component) : null;
  const children = (node.children || []).map((child: any) => nodeToRoute(child, fullPath, false));
  const elementContent = Component ? <Component meta={node} /> : null;

  return {
    path,
    element:
      elementContent &&
      (wrapWithLayout ? (
        <MainLayout meta={node}>{elementContent}</MainLayout>
      ) : (
        elementContent
      )),
    children: children.length ? children : undefined,
  };
}

export const router = createBrowserRouter(site.site.routes.map((route: any) => nodeToRoute(route)));
