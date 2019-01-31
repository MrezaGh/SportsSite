from rest_framework import generics

from .models import TeamData, NewsPage, Comment
from .serializer import TeamDataSerializer, NewsPageSerializer, CommentSerializer


class Teamdata(generics.ListCreateAPIView):
    queryset = TeamData.objects.all()
    serializer_class = TeamDataSerializer


class Newspage(generics.ListCreateAPIView):
    queryset = NewsPage.objects.all()
    serializer_class = NewsPageSerializer


class Comment(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

