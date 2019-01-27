from rest_framework import serializers
from .models import TeamData


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