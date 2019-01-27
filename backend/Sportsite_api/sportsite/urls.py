from django.urls import path

from . import views

urlpatterns = [
    path('TeamData/', views.ListTodo.as_view()),
]