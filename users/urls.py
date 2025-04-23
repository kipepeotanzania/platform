from django.urls import path
from . import views

urlpatterns = [
    #Auth
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),

    #Dashboards privados
    path('volunteer/dashboard/', views.volunteer_dashboard, name='volunteer_dashboard'),
    path('traveler/dashboard/', views.traveler_dashboard, name='traveler_dashboard'),
    path('donor/dashboard/', views.donor_dashboard, name='donor_dashboard'),
    path('upload-document/', views.upload_document, name='upload_document'),

    #Páginas públicas
     path('', views.home_view, name='home'),
    path('about/origin/', views.origin_view, name='origin'),
    path('about/who-we-are/', views.who_view, name='who'),
    path('about/mission-vision/', views.mission_view, name='mission'),
    path('about/objectives/', views.objectives_view, name='objectives'),
    path('about/transparency/', views.transparency_view, name='transparency'),
    path('about/location/', views.location_view, name='location'),

    path('projects/together-at-the-table/', views.project_table, name='project_table'),
    path('projects/a-place-to-call-home/', views.project_home, name='project_home'),
    path('projects/library/', views.project_library, name='project_library'),
    path('projects/computer-class/', views.project_computer, name='project_computer'),
    path('projects/mamas-project/', views.project_mamas, name='project_mamas'),

    path('collaborate/international-volunteer/', views.volunteer_international, name='volunteer_international'),
    path('collaborate/volunteer-from-home/', views.volunteer_home, name='volunteer_home'),
    path('collaborate/donations/', views.collab_donations, name='collab_donations'),
    path('collaborate/sponsorship/', views.collab_sponsorship, name='collab_sponsorship'),

    path('immersive-travel/', views.immersive_travel, name='immersive_travel'),
    path('gallery/', views.gallery_view, name='gallery'),
]