# Turno Web

Landing estática, informativa, del servicio Turno (bot de reservas por
WhatsApp para peluquerías). Sin build step: HTML/CSS/JS plano.

Ver [SPEC.md](./SPEC.md) para la especificación de contenido y diseño.

## Ver localmente

Cualquier servidor estático sirve. Por ejemplo:

```bash
npx serve .
```

o simplemente abrir `index.html` en el navegador.

## Publicar en GitHub Pages

1. Crear un repo nuevo en GitHub llamado `TurnoWeb` (público, sin
   inicializar con README/gitignore).
2. Desde esta carpeta:

   ```bash
   git init
   git add .
   git commit -m "Landing inicial de Turno"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/TurnoWeb.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Source**, elegir la rama `main` y la
   carpeta `/ (root)`.
4. El sitio queda publicado en
   `https://<tu-usuario>.github.io/TurnoWeb/` en un par de minutos.

## Antes de publicar

Revisar la lista de pendientes en [SPEC.md](./SPEC.md#contenido-pendiente-de-reemplazar-antes-de-publicar)
— hay un email de contacto placeholder que hay que reemplazar por el real.
