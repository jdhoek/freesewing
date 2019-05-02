import freesewing from "@freesewing/core";
import plugins from "@freesewing/plugin-bundle";
import config from "../config/";
import { version } from "../package.json";
// Path API
import draftPath_ops from "./path_ops";
import draftPath_attr from "./path_attr";
import draftPath_clone from "./path_clone";
import draftPath_divide from "./path_divide";
import draftPath_edge from "./path_edge";
import draftPath_end from "./path_end";
import draftPath_intersects from "./path_intersects";
import draftPath_intersectsx from "./path_intersectsx";
import draftPath_intersectsy from "./path_intersectsy";
import draftPath_join from "./path_join";
import draftPath_length from "./path_length";
import draftPath_offset from "./path_offset";
import draftPath_reverse from "./path_reverse";
import draftPath_shiftalong from "./path_shiftalong";
import draftPath_shiftfractionalong from "./path_shiftfractionalong";
import draftPath_split from "./path_split";
import draftPath_start from "./path_start";
import draftPath_translate from "./path_translate";
import draftPath_trim from "./path_trim";
// Plugins
import draftPlugin_cutonfold from "./plugin_cutonfold";
import draftPlugin_dimension from "./plugin_dimension";
import draftPlugin_grainline from "./plugin_grainline";
import draftPlugin_logo from "./plugin_logo";
import draftPlugin_scalebox from "./plugin_scalebox";
import draftPlugin_title from "./plugin_title";
// Point API
import draftPoint_angle from "./point_angle";
import draftPoint_attr from "./point_attr";
import draftPoint_clone from "./point_clone";
import draftPoint_copy from "./point_copy";
import draftPoint_dist from "./point_dist";
import draftPoint_dx from "./point_dx";
import draftPoint_dy from "./point_dy";
import draftPoint_flipx from "./point_flipx";
import draftPoint_flipy from "./point_flipy";
import draftPoint_shift from "./point_shift";
import draftPoint_shiftfractiontowards from "./point_shiftfractiontowards";
import draftPoint_shifttowards from "./point_shifttowards";
import draftPoint_shiftoutwards from "./point_shiftoutwards";
import draftPoint_sitson from "./point_sitson";
import draftPoint_rotate from "./point_rotate";
import draftPoint_translate from "./point_translate";
// Utils API
import draftUtils_linesintersect from "./utils_linesintersect";
import draftUtils_beamsintersect from "./utils_beamsintersect";
import draftUtils_beamintersectsx from "./utils_beamintersectsx";
import draftUtils_beamintersectsy from "./utils_beamintersectsy";
import draftUtils_lineintersectscurve from "./utils_lineintersectscurve";
import draftUtils_curvesintersect from "./utils_curvesintersect";
import draftUtils_pointonbeam from "./utils_pointonbeam";
import draftUtils_pointonline from "./utils_pointonline";
import draftUtils_pointoncurve from "./utils_pointoncurve";
import draftUtils_circlesintersect from "./utils_circlesintersect";
import draftUtils_beamintersectscircle from "./utils_beamintersectscircle";
import draftUtils_lineintersectscircle from "./utils_lineintersectscircle";
import draftUtils_curveintersectsx from "./utils_curveintersectsx";
import draftUtils_curveintersectsy from "./utils_curveintersectsy";
import draftUtils_splitcurve from "./utils_splitcurve";
// Various
import draftSettings_sa from "./settings_sa";
import draftSnippet_attr from "./snippet_attr";
import draftSnippet_clone from "./snippet_clone";

// Create design
const Pattern = new freesewing.Design(config, plugins);

// Attach draft methods to prototype
let methods = {
  draftPath_move: draftPath_ops,
  draftPath_line: draftPath_ops,
  draftPath_curve: draftPath_ops,
  draftPath__curve: draftPath_ops,
  draftPath_curve_: draftPath_ops,
  draftPath_close: draftPath_ops,
  draftPath_attr,
  draftPath_clone,
  draftPath_divide,
  draftPath_edge,
  draftPath_end,
  draftPath_intersects,
  draftPath_intersectsx,
  draftPath_intersectsy,
  draftPath_join,
  draftPath_length,
  draftPath_offset,
  draftPath_ops,
  draftPath_reverse,
  draftPath_shiftalong,
  draftPath_shiftfractionalong,
  draftPath_split,
  draftPath_start,
  draftPath_translate,
  draftPath_trim,
  draftPlugin_cutonfold,
  draftPlugin_dimension,
  draftPlugin_grainline,
  draftPlugin_logo,
  draftPlugin_scalebox,
  draftPlugin_title,
  draftPoint_attr,
  draftPoint_angle,
  draftPoint_attr,
  draftPoint_clone,
  draftPoint_copy,
  draftPoint_dist,
  draftPoint_dx,
  draftPoint_dy,
  draftPoint_flipx,
  draftPoint_flipy,
  draftPoint_shift,
  draftPoint_shiftfractiontowards,
  draftPoint_shifttowards,
  draftPoint_shiftoutwards,
  draftPoint_sitson,
  draftPoint_rotate,
  draftPoint_translate,
  draftSettings_sa,
  draftSnippet_attr,
  draftSnippet_clone,
  draftUtils_linesintersect,
  draftUtils_beamsintersect,
  draftUtils_beamintersectsx,
  draftUtils_beamintersectsy,
  draftUtils_lineintersectscurve,
  draftUtils_curvesintersect,
  draftUtils_pointonbeam,
  draftUtils_pointonline,
  draftUtils_pointoncurve,
  draftUtils_circlesintersect,
  draftUtils_beamintersectscircle,
  draftUtils_lineintersectscircle,
  draftUtils_curveintersectsx,
  draftUtils_curveintersectsy,
  draftUtils_splitcurve
};

for (let m of Object.keys(methods)) Pattern.prototype[m] = methods[m];

export default Pattern;
