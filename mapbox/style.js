
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Bike_Network_1": {
            "type": "geojson",
            "data": json_Bike_Network_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Bike_Network_1_0",
            "type": "line",
            "source": "Bike_Network_1",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'TYPE'], 'Bus Bike Lane'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Contraflow'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Conventional'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Conventional & Dashed Bike Lane'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Conventional w Sharrows'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Dashed Bike Lane'], 2.357142857142857, ['==', ['get', 'TYPE'], 'One Way Separated Bike Lane'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Paint Buffered'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Paint Buffered w Conventional'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Separated Bike Lane'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Sharrow'], 2.357142857142857, ['==', ['get', 'TYPE'], 'Two Way Separated Bike Lane'], 2.357142857142857, 2.357142857142857], 'line-opacity': ['case', ['==', ['get', 'TYPE'], 'Bus Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Contraflow'], 1.0, ['==', ['get', 'TYPE'], 'Conventional'], 1.0, ['==', ['get', 'TYPE'], 'Conventional & Dashed Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Conventional w Sharrows'], 1.0, ['==', ['get', 'TYPE'], 'Dashed Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'One Way Separated Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Paint Buffered'], 1.0, ['==', ['get', 'TYPE'], 'Paint Buffered w Conventional'], 1.0, ['==', ['get', 'TYPE'], 'Separated Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Sharrow'], 1.0, ['==', ['get', 'TYPE'], 'Two Way Separated Bike Lane'], 1.0, 1.0], 'line-color': ['case', ['==', ['get', 'TYPE'], 'Bus Bike Lane'], '#e579d1', ['==', ['get', 'TYPE'], 'Contraflow'], '#4c17de', ['==', ['get', 'TYPE'], 'Conventional'], '#2595d2', ['==', ['get', 'TYPE'], 'Conventional & Dashed Bike Lane'], '#b339df', ['==', ['get', 'TYPE'], 'Conventional w Sharrows'], '#1bd86d', ['==', ['get', 'TYPE'], 'Dashed Bike Lane'], '#56d250', ['==', ['get', 'TYPE'], 'One Way Separated Bike Lane'], '#677acb', ['==', ['get', 'TYPE'], 'Paint Buffered'], '#97e648', ['==', ['get', 'TYPE'], 'Paint Buffered w Conventional'], '#d57f9d', ['==', ['get', 'TYPE'], 'Separated Bike Lane'], '#efa748', ['==', ['get', 'TYPE'], 'Sharrow'], '#cd2b16', ['==', ['get', 'TYPE'], 'Two Way Separated Bike Lane'], '#77eee0', '#e0e551']}
        }
],
}