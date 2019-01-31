from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class TeamData(models.Model):
    name = models.CharField(max_length=200)
    year = models.IntegerField()
    games = models.IntegerField()
    score = models.IntegerField()
    win = models.IntegerField()
    equal = models.IntegerField()
    lose = models.IntegerField()
    goal_achived = models.IntegerField()
    goal = models.IntegerField()
    dif_goal = models.IntegerField()

    def __str__(self):
        """A string representation of the model."""
        return self.name


class NewsPage(models.Model):
    header = models.TextField()
    body = models.TextField()
    imageurl = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.header


class Comment(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    body = models.TextField()
    time = models.DateTimeField()

    def __str__(self):
        return self.first_name + " " + self.last_name
