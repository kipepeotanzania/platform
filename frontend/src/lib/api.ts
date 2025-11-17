const API_BASE = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:4000/api';

type ApiOptions = RequestInit & { token?: string | null };

type ApiError = {
  message: string;
  status?: number;
  details?: unknown;
};

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');
  const isJson = contentType?.includes('application/json');
  const payload = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const error: ApiError = {
      message: isJson ? payload?.message || 'Error en la solicitud' : String(payload || 'Error en la solicitud'),
      status: response.status,
      details: isJson ? payload : undefined,
    };
    throw error;
  }

  return payload as T;
}

export async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (options.token) {
    headers.set('Authorization', `Bearer ${options.token}`);
  }

  const response = await fetch(`${API_BASE}${path.startsWith('/') ? path : `/${path}`}`, {
    ...options,
    headers,
  });

  return handleResponse<T>(response);
}
