from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import TeamData, NewsPage, Comment

admin.site.register(TeamData)
admin.site.register(NewsPage)
admin.site.register(Comment)

