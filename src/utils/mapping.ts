import Map from 'ol/Map'
import View from 'ol/View'
import OSM from 'ol/source/OSM'
import Google from 'ol/source/Google'
import { fromLonLat} from 'ol/proj'
import TileLayer from 'ol/layer/Tile'

export const olView = (cont:HTMLDivElement):View => {
    let map = new Map({
        target:cont,
        layers:[new TileLayer({source:new OSM()})]
    })
    
    map.setView(new View(
        {
            center:fromLonLat([-71.50, 42.10]), 
            zoom:7,
            minZoom: 7,
            maxZoom:18
        }
    ))
    return map.getView()
}