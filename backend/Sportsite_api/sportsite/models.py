from django.contrib.auth.models import User
from django.db import models
from django.utils.timezone import now


# Create your models here.
class TeamData(models.Model):  # I edited this
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200)  # edited
    dateCreated = models.DateTimeField(default=now)  # edited
    location = models.CharField(max_length=100)  # new
    description = models.TextField(default='NA')  # new
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


# just completing all the models we need
class News(models.Model):
    img = models.CharField(max_length=200)  # url
    date = models.DateTimeField(default=now)
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=1000)


class Match(models.Model):
    teams = models.ManyToManyField(TeamData)
    firstTeamScore = models.IntegerField()
    secondTeamSocre = models.IntegerField()
    date = models.DateTimeField(default=now)


class Player(models.Model):
    image = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    age = models.IntegerField()
    height = models.CharField(max_length=10)
    weigth = models.CharField(max_length=10)
    team = models.ForeignKey(TeamData, on_delete=models.CASCADE)
    nationality = models.CharField(max_length=50)
    post = models.CharField
    goal = models.IntegerField()
    assist = models.IntegerField()
    yellowCard = models.IntegerField()
    redCard = models.IntegerField()
    biography = models.CharField(max_length=2000)


class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    role = models.CharField(max_length=50)
    post = models.CharField
    age = models.IntegerField()


