from django.contrib import admin

from .models import UserModel

class UserModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_active', 'is_admin')
    list_filter = ('is_staff', 'is_active', 'is_admin')

    fieldsets = (
        ('General info', {'fields': ('username', 'email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_admin')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'is_staff', 'is_active', 'is_admin')}
        ),
    )

    search_fields = ('username', 'email')
    ordering = ('username',)

admin.site.register(UserModel, UserModelAdmin)