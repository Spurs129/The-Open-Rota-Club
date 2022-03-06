from django.db import models

# Create your models here.
class Venue(models.Model):
  name = models.CharField(max_length=30, default=None)
  par = models.PositiveIntegerField(default=None)
  course_record = models.PositiveIntegerField(default=None)
  course_record_holder = models.CharField(max_length=40, default=None)
  years_hosted_open = models.PositiveIntegerField(default=None)
  previous_winners = models.CharField(max_length=300, default=None)
  photos = models.CharField(max_length=200, default='')
  #members_completed = models.ManyToManyField(
    #"members.Member",
    #related_name = "venues",
    #default=''
  #)

  def __str__(self):
    return f"{self.name}"



