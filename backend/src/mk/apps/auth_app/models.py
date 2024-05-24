from typing import Optional

from django.contrib.auth.models import AbstractBaseUser
from django.db import models as md

from .managers import UserManager

class UserModel(AbstractBaseUser):
    username = md.CharField(verbose_name='Username', max_length=255, unique=True,)
    email = md.EmailField(verbose_name='Email', max_length=125, unique=True,)

    is_active = md.BooleanField(verbose_name='User is active', default=True,)

    is_staff = md.BooleanField(verbose_name='User is staff', default=False,)
    is_admin = md.BooleanField(verbose_name='User is superuser (is have admin status)', default=False,)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email',]

    objects = UserManager()

    def __str__(self) -> str:
        return f'User: {self.username} (ID: {self.pk}) || Staff: {self.is_staff} || Active: {self.is_active}'
    
    def get_full_name(self) -> Optional[str]:
        return self.username
    
    def get_short_name(self) -> Optional[str]:
        return self.username
    
    def has_perm(self, perm, obj=None) -> bool:
        return True
    
    def has_module_perms(self, app_label) -> bool:
        return True

    class Meta:
        db_table = 'user_table'
        db_table_comment = 'the table responsible for storing user models'

        verbose_name = 'User'
        verbose_name_plural = 'Users`s'