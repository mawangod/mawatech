import Vue from 'vue'
import * as Map from 'vuelayers/lib/map'
import TileLayer from 'vuelayers/lib/tile-layer'
import OsmSource from 'vuelayers/lib/osm-source'
import VectorLayer from 'vuelayers/lib/vector-layer'
import VectorSource from 'vuelayers/lib/vector-source'
import StyleBox from 'vuelayers/lib/style-box'
import FillStyle from 'vuelayers/lib/fill-style'
import StrokeStyle from 'vuelayers/lib/stroke-style'
import IconStyle from 'vuelayers/lib/icon-style'

Vue.use(Map)
Vue.use(TileLayer)
Vue.use(VectorLayer)
Vue.use(OsmSource)
Vue.use(VectorSource)
Vue.use(StyleBox)
Vue.use(FillStyle)
Vue.use(StrokeStyle)
Vue.use(IconStyle)
