from rest_framework import serializers
from .models import TeamData, NewsPage, Comment


class TeamDataSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'year',
            'games',
            'score',
            'win',
            'equal',
            'lose',
            'goal_achived',
            'goal',
            'dif_goal'
        )
        model = TeamData


class NewsPageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'header',
            'body',
            'imageurl',
        )
        model = NewsPage


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'first_name',
            'last_name',
            'body',
            'time',
        )
        model = Comment
