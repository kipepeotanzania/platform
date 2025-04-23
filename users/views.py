from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from .forms import CustomUserCreationForm, CustomLoginForm, DocumentUploadForm
from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponse


def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect_by_role(user)
    else:
        form = CustomUserCreationForm()
    return render(request, 'users/register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = CustomLoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect_by_role(user)
    else:
        form = CustomLoginForm()
    return render(request, 'users/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')

def redirect_by_role(user):
    if user.role == 'admin':
        return redirect('/admin/')
    elif user.role == 'volunteer':
        return redirect('/users/volunteer/dashboard/')
    elif user.role == 'traveler':
        return redirect('/users/traveler/dashboard/')
    elif user.role == 'donor':
        return redirect('/users/donor/dashboard/')
    return redirect('/')

# Funciones para comprobar el rol
def is_volunteer(user):
    return user.role == 'volunteer'

def is_traveler(user):
    return user.role == 'traveler'

def is_donor(user):
    return user.role == 'donor'

# Dashboards
def home_view(request):
    return render(request, 'users/home.html')
def origin_view(request): return render(request, 'users/about/origin.html')
def who_view(request): return render(request, 'users/about/who.html')
def mission_view(request): return render(request, 'users/about/mission.html')
def objectives_view(request): return render(request, 'users/about/objectives.html')
def transparency_view(request): return render(request, 'users/about/transparency.html')
def location_view(request): return render(request, 'users/about/location.html')

def project_table(request): return render(request, 'users/projects/table.html')
def project_home(request): return render(request, 'users/projects/home.html')
def project_library(request): return render(request, 'users/projects/library.html')
def project_computer(request): return render(request, 'users/projects/computer.html')
def project_mamas(request): return render(request, 'users/projects/mamas.html')

def volunteer_international(request): return render(request, 'users/collaborate/international.html')
def volunteer_home(request): return render(request, 'users/collaborate/home.html')
def collab_donations(request): return render(request, 'users/collaborate/donations.html')
def collab_sponsorship(request): return render(request, 'users/collaborate/sponsorship.html')

def immersive_travel(request): return render(request, 'users/immersive_travel.html')
def gallery_view(request): return render(request, 'users/gallery.html')


#Auth required
@login_required
@user_passes_test(is_volunteer)
def volunteer_dashboard(request):
    return HttpResponse("Welcome to the Volunteer Dashboard!")

@login_required
@user_passes_test(is_traveler)
def traveler_dashboard(request):
    return HttpResponse("Welcome to the Traveler Dashboard!")

@login_required
@user_passes_test(is_donor)
def donor_dashboard(request):
    return HttpResponse("Welcome to the Donor Dashboard!")

@login_required
def upload_document(request):
    if request.method == 'POST':
        form = DocumentUploadForm(request.POST, request.FILES)
        if form.is_valid():
            document = form.save(commit=False)
            document.user = request.user
            document.save()
            return redirect_by_role(request.user)
    else:
        form = DocumentUploadForm()
    return render(request, 'users/upload_document.html', {'form': form})