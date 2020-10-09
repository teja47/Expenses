from django.urls import path
from .views import PosterDetailView,PosterListView,PosterCreateView,PosterUpdateView,PosterDeleteView

urlpatterns =[
    path('',PosterListView.as_view()),
    path('<pk>',PosterDetailView.as_view()),
    path('create/',PosterCreateView.as_view()),
    path('<pk>/update',PosterUpdateView.as_view()),
    path('<pk>/delete',PosterDeleteView.as_view())


   

]