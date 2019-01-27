from rest_framework import generics

from .models import TeamData
from .serializer import TeamDataSerializer


class ListTodo(generics.ListCreateAPIView):
    queryset = TeamData.objects.all()
    serializer_class = TeamDataSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamData.objects.all()
    serializer_class = TeamDataSerializer
