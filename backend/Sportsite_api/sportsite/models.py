from django.db import models


# Create your models here.
class TeamData(models.Model):
    name = models.CharField(max_length=200)
    year= models.IntegerField();
    games = models.IntegerField();
    score = models.IntegerField();
    win = models.IntegerField();
    equal = models.IntegerField();
    lose = models.IntegerField();
    goal_achived = models.IntegerField();
    goal = models.IntegerField();
    dif_goal = models.IntegerField();

    def __str__(self):
        """A string representation of the model."""
        return self.name
