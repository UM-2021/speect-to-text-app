# Generated by Django 2.2.14 on 2021-04-25 20:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_respuesta_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='auditoria',
            name='usuario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Usuario'),
        ),
    ]