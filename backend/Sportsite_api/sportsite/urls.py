from django.urls import path

from . import views

urlpatterns = [
    path('TeamData/', views.Teamdata.as_view()),
    path('NewsPage/', views.Newspage.as_view()),
    path('Comment/', views.Comment.as_view()),

]