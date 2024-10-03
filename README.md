# Web Scrapping - Pampling

Este proyecto extrae datos de la sección "Outlet" de la tienda online **Pampling**, los convierte a JSON y los guarda en una base de datos. Incluye endpoints para interactuar con la DB y un mini front-end para visualizar los datos.

## **Estructura del Proyecto**

- **Scraper**: Contiene los scripts para realizar el scraping de la web Pampling.
- **Api**: Incluye las rutas y controladores para interactuar con la base de datos.
- **FRONT-test**: Archivos HTML, CSS y JS para probar y visualizar los datos extraídos.

## **Scripts**

**npm run dev**: Inicia el servidor en modo desarrollo en http://localhost:3000.

```bash
npm run dev
```

**npm run scrap**: Ejecuta el script de scraping para extraer los datos del "Outlet".

```bash
npm run scrap
```

### **Endpoints**

| Método | Ruta              | Descripción                             |
| ------ | ----------------- | --------------------------------------- |
| POST   | `/api/v1/tshirts` | Inserta camisetas del outlet en la DB.  |
| GET    | `/api/v1/tshirts` | Obtiene todas las camisetas del outlet. |
| DELETE | `/api/v1/tshirts` | Elimina todas las camisetas del outlet. |

### **Carpeta de Pruebas de Frontend**

En la carpeta FRONT-test se encuentran archivos para probar la visualización de los datos:

- **index.html**: Página principal para mostrar las camisetas..
- **styles.css**: Estilos de la página.
- **script.js**: Código para obtener y mostrar datos con fetch.

Para ver el funcionamiento, simplemente abre el archivo **index.html** en un navegador.

### **Visualización de Resultados**

El mini front-end también presenta una serie de estadísticas basadas en los datos obtenidos del scraping. Entre las métricas mostradas están:

- **Total de camisetas**: Muestra el número total de camisetas extraídas del "Outlet".
- **Media del precio actual**: El promedio del precio actual de todas las camisetas.
- **Media del precio anterior**: El promedio del precio anterior (sin descuento) de todas las camisetas.
- **Media del descuento**: El descuento medio en euros y en porcentaje aplicado a las camisetas.

### **Conclusión**

Este proyecto ofrece una solución completa y eficiente para extraer, almacenar y visualizar los datos del outlet de Pampling. La API facilita la gestión de las camisetas, y el front-end ofrece estadísticas útiles para análisis de precios y descuentos.
