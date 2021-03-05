//Global Variables
let ustimeline = []
let usTimelineDeath = []
let usTimelineConfirm = []
let altimeline = []
let aktimeline = []
let astimeline = []
let aztimeline = []
let artimeline = []
let catimeline = []
let cotimeline = []
let cttimeline = []
let detimeline = []
let dctimeline = []
let fltimeline = []
let gatimeline = []
let gutimeline = []
let hitimeline = []
let idtimeline = []
let iltimeline = []
let intimeline = []
let iatimeline = []
let kstimeline = []
let kytimeline = []
let latimeline = []
let metimeline = []
let mdtimeline = []
let matimeline = []
let mitimeline = []
let mntimeline = []
let mstimeline = []
let motimeline = []
let mttimeline = []
let netimeline = []
let nvtimeline = []
let nhtimeline = []
let njtimeline = []
let nmtimeline = []
let nytimeline = []
let nctimeline = []
let ndtimeline = []
let mptimeline = []
let ohtimeline = []
let oktimeline = []
let ortimeline = []
let patimeline = []
let prtimeline = []
let ritimeline = []
let sctimeline = []
let sdtimeline = []
let tntimeline = []
let txtimeline = []
let vitimeline = []
let uttimeline = []
let vttimeline = []
let vatimeline = []
let watimeline = []
let wvtimeline = []
let witimeline = []
let wytimeline = []
let dateValue = []
const deathValue = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 4, 5, 8, 11, 14, 16, 20, 26, 27, 31, 35, 37, 43, 52, 57, 65, 80, 102, 124, 152, 203, 273, 335, 480, 581, 817, 1058, 1371, 1781, 2332, 2837, 3422, 4330, 5336, 6511, 7798, 9276, 10618, 11932, 13970, 15973, 18024, 20107, 22182, 23882, 25515, 27867, 30412, 32606, 34724, 36619, 38382, 40198, 42677, 44762, 46571, 48545, 50174, 51393, 52683, 54761, 57437, 59597, 61406, 62933, 64181, 65209, 67699, 69617, 72365, 74149, 75605, 76640, 77531, 79040, 80770, 82623, 84161, 85398, 86271, 87125, 88442, 89839, 91219, 92509, 93549, 94237, 94793, 95458, 96793, 98028, 99202, 100125, 100780, 101459, 102430, 103405, 104288, 105123, 105837, 106284, 106959, 107845, 108738, 109634, 110400, 111094, 111449, 111834, 112554, 113334, 114016, 114668, 115283, 115576, 115864, 116588, 117292, 117940, 118558, 119066, 119339, 119675, 120254, 120952, 121651, 122254, 122550, 122759, 122996, 123901, 124720, 125583, 126422, 127177, 127649, 127978, 128719, 129582, 130523, 131462, 132338, 132865, 133241, 134282, 135431, 136501, 137676, 138690, 139251, 140317, 141428, 142931, 144179, 145507, 146708, 147204, 147720, 148961, 150316, 151557, 152880, 153966, 154587, 155017, 156337, 157854, 159017, 160243, 161470, 162087, 162498, 163677, 165088, 166217, 167336, 168371, 168948, 169289, 170429, 171729, 172857, 173877, 174894, 175371, 175751, 176765, 177800, 178872, 179871, 180797, 181249, 181476, 181823, 182911, 184072, 185087, 185904, 186296, 186703, 187737, 188927, 189807, 190708, 191455, 191782, 192063, 192922, 194078, 195016, 195863, 196736, 197046, 197292, 198016, 199080, 199942, 200784, 201522, 201902, 202233, 202846, 203775, 204754, 205667, 206358, 206829, 207114, 207832, 208633, 209561, 210452, 211232, 211637, 212080, 212913, 213941, 215058, 216007, 216903, 217294, 217691, 218613, 219660, 220720, 221667, 222625, 223035, 223510, 225027, 226158, 227312, 228497, 229622, 230135, 230712, 232070, 233647, 234759, 236060, 237413, 238125, 238732, 240285, 242170, 244180, 246090, 247641, 248564, 249417, 251508, 253789, 255181, 256585, 257828, 258653, 259690, 262179, 264990, 267812, 270375, 272861, 274024, 275315, 277995, 281164, 284296, 287043, 289540, 291041, 292398, 295322, 298775, 302240, 305106, 307814, 309482, 310962, 314099, 317492, 320450, 322003, 323429, 324826, 326316, 329605, 333505, 336802, 339394, 341800, 343255, 344802, 348286, 352188, 356267, 360047, 363584, 365652, 367385, 371449, 375536, 379451, 383130, 386839, 388892, 390287, 392428, 396837, 400715, 404695, 408286, 410230, 411823, 415557, 419634, 423645, 427148, 430130, 432189, 433751, 437237, 440922, 446134, 449677, 452671, 454146, 455455, 458250, 461695, 465568, 470995, 474462, 475828, 476906, 478259, 480607, 483223, 485700, 487860, 489147, 490382, 492623, 495070, 498208, 500349, 502196, 503247, 504488, 506216, 508665, 510408]
const posValue = [null, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10, 12, 13, 15, 18, 42, 72, 114, 240, 305, 437, 574, 744, 1020, 1408, 1828, 2511, 3354, 4379, 5668, 7383, 9471, 12828, 17442, 23544, 30476, 39699, 50891, 61773, 74404, 92020, 111274, 131045, 150709, 171911, 196848, 223119, 251182, 283072, 316130, 342040, 370283, 400759, 431718, 466834, 500442, 531705, 559820, 584101, 609975, 639896, 671423, 703407, 731357, 758880, 784847, 810886, 840062, 872015, 906241, 941975, 969289, 991696, 1016930, 1043106, 1073152, 1105960, 1135156, 1160945, 1183140, 1205484, 1230740, 1257969, 1285166, 1310486, 1331602, 1349742, 1372184, 1393684, 1420457, 1445947, 1469690, 1490126, 1510723, 1531410, 1552703, 1579534, 1603649, 1626210, 1645272, 1663827, 1680517, 1699689, 1722488, 1746106, 1769702, 1791343, 1811444, 1831323, 1851505, 1871982, 1895032, 1917778, 1936834, 1953757, 1970673, 1991553, 2013544, 2036685, 2062138, 2083796, 2102051, 2124889, 2149042, 2176084, 2206949, 2239185, 2268373, 2295202, 2328649, 2367766, 2407473, 2451813, 2494871, 2536616, 2576014, 2623024, 2674070, 2727581, 2781780, 2836661, 2881995, 2922920, 2973910, 3036723, 3095785, 3162896, 3225465, 3287070, 3344230, 3402839, 3472212, 3542701, 3619225, 3683975, 3748205, 3804868, 3867788, 3937210, 4008646, 4083707, 4148552, 4209320, 4263799, 4322256, 4386399, 4455360, 4523187, 4583866, 4637167, 4679905, 4731103, 4783801, 4837849, 4898672, 4952201, 5002967, 5044337, 5099272, 5155458, 5207221, 5264322, 5320368, 5362871, 5400622, 5440692, 5485765, 5529609, 5576065, 5622119, 5660019, 5694562, 5731401, 5775732, 5819843, 5865958, 5909953, 5948719, 5980439, 6022681, 6053336, 6097979, 6149579, 6194439, 6227472, 6255589, 6277899, 6308632, 6346041, 6390739, 6432589, 6467168, 6500740, 6535518, 6575837, 6619479, 6666368, 6712036, 6747569, 6786731, 6835717, 6875215, 6918556, 6973793, 7021061, 7056051, 7091427, 7128193, 7173102, 7218822, 7268249, 7319123, 7357288, 7395040, 7433886, 7485102, 7540410, 7597403, 7655038, 7701710, 7744944, 7791923, 7849163, 7912804, 7981309, 8038984, 8086941, 8144591, 8205165, 8266875, 8340294, 8422869, 8506661, 8571132, 8634562, 8706817, 8786517, 8875882, 8973824, 9065118, 9207091, 9290545, 9410494, 9516490, 9635513, 9765503, 9897616, 10010061, 10128464, 10264033, 10413366, 10570908, 10745541, 10913267, 11060329, 11210306, 11370132, 11538352, 11726284, 11923448, 12109833, 12264021, 12418717, 12585220, 12773716, 12903480, 13102354, 13253823, 13391077, 13541108, 13722291, 13925720, 14141991, 14372304, 14591374, 14773954, 14955851, 15173695, 15390423, 15611269, 15848202, 16075106, 16262357, 16455643, 16648861, 16883149, 17126119, 17367905, 17572778, 17770272, 17949678, 18142686, 18367212, 18573896, 18700692, 18891286, 19044826, 19208953, 19408632, 19638128, 19864374, 20047280, 20327598, 20536055, 20715626, 20934701, 21184885, 21456928, 21752049, 22021417, 22250149, 22445404, 22663424, 22887915, 23113531, 23359985, 23578070, 23765288, 23916080, 24062706, 24251909, 24438184, 24629099, 24806217, 24950451, 25083905, 25230353, 25384338, 25541644, 25708755, 25857579, 25976946, 26097146, 26214762, 26331722, 26455629, 26586775, 26701332, 26797326, 26875063, 26968049, 27063243, 27165660, 27266690, 27357332, 27429496, 27484573, 27540885, 27607724, 27674548, 27749224, 27821578, 27880280, 27932810, 28001915, 28075173, 28150738, 28225595, 28296840, 28351189, 28399281, 28453529, 28520365, 28585852]
const hosValue = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 325, 416, 617, 1042, 1492, 2173, 2812, 3938, 5140, 7805, 10887, 12393, 14055, 15892, 18155, 20906, 22995, 25723, 30456, 32180, 36159, 43849, 45359, 51323, 53167, 55563, 55294, 56211, 59610, 59930, 59496, 58892, 57799, 56497, 56721, 59779, 59207, 59214, 57370, 57340, 56161, 56183, 56034, 56009, 54905, 54897, 54008, 52623, 52375, 53164, 52609, 51445, 49770, 48581, 46735, 46550, 47343, 46921, 45923, 44553, 43515, 42019, 41940, 42023, 41856, 41359, 40008, 38625, 37742, 37703, 37751, 38300, 38000, 36942, 35759, 34925, 34325, 33956, 33227, 32802, 32502, 31994, 31490, 31105, 31179, 30961, 29850, 29306, 28578, 28020, 28034, 28370, 28647, 28538, 28693, 28084, 28325, 28963, 30355, 31270, 31922, 31850, 32566, 32575, 33742, 35337, 36526, 37646, 37927, 38281, 38872, 39960, 41949, 43207, 44051, 51724, 51982, 52860, 54118, 55678, 56340, 57602, 57871, 57822, 58052, 58518, 59476, 59758, 59860, 59800, 59382, 58731, 58987, 57185, 57422, 56571, 55721, 54554, 54106, 53517, 53436, 53435, 53219, 51327, 50071, 48997, 48751, 48600, 48067, 47303, 45868, 44922, 44155, 43614, 43840, 43406, 42109, 41049, 40017, 39064, 38806, 38831, 38515, 37498, 37356, 36516, 35801, 35453, 35338, 35660, 34753, 34177, 33626, 32497, 32116, 32339, 32653, 32521, 31530, 30758, 29921, 30071, 30427, 30345, 30035, 29651, 29185, 28724, 28849, 29645, 30015, 30159, 29888, 29670, 29579, 29696, 30601, 31021, 30942, 30880, 30209, 30063, 31426, 32726, 33565, 34446, 34974, 34700, 34609, 35148, 36171, 37184, 37423, 37479, 37474, 36536, 37976, 39391, 40397, 41114, 41614, 42087, 41883, 42988, 44391, 45214, 46191, 46880, 47486, 47615, 48750, 50509, 52166, 53380, 55005, 56037, 56942, 59342, 62119, 65549, 67236, 68585, 69588, 70202, 73320, 77047, 79478, 80669, 82318, 83346, 83882, 85945, 88132, 90043, 90564, 89913, 91762, 93357, 96134, 98736, 100327, 100746, 101309, 101192, 101501, 102122, 104637, 106671, 107300, 108101, 108461, 109298, 110573, 112816, 113257, 114492, 113955, 113914, 113601, 115358, 117777, 119463, 120200, 118948, 117344, 118720, 121202, 124686, 125220, 125423, 125047, 123614, 125562, 128210, 131195, 132474, 132370, 131921, 130781, 129223, 129793, 131326, 130391, 128947, 127235, 126139, 124387, 123848, 123820, 122700, 119949, 116264, 113609, 110628, 109936, 108960, 107444, 104303, 101003, 97561, 95013, 93536, 92880, 91440, 88668, 86373, 84233, 81439, 80055, 79179, 76979, 74225, 71497, 69283, 67023, 65455, 64533, 63405, 62300, 59882, 58222, 56159, 55403, 55058, 54118, 52669, 51112, 48871, 47352, 46738, 46388, 45462, 44172]
const icuValue = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1299, 1792, 2174, 2456, 3087, 3487, 3937, 4513, 4928, 5500, 5811, 7079, 9978, 10276, 12445, 12693, 13293, 13597, 13605, 14047, 14639, 15136, 14910, 14764, 14385, 14463, 14945, 15016, 14737, 14623, 14411, 14093, 13812, 13562, 13550, 13246, 12861, 12904, 12724, 12701, 12620, 12480, 12135, 11786, 11504, 11382, 11153, 11241, 10991, 10655, 10476, 10276, 9945, 9748, 9598, 9522, 9092, 9042, 8739, 8491, 8467, 8580, 8552, 8392, 8170, 7960, 7625, 7592, 7410, 7229, 7044, 6921, 6762, 6501, 6398, 6453, 6256, 6075, 6009, 5883, 5749, 5700, 5570, 5608, 5472, 5337, 5229, 5195, 5325, 5392, 5292, 5319, 5290, 5314, 5252, 5389, 5426, 5492, 5636, 5597, 5633, 5653, 5678, 5838, 5872, 5843, 5899, 5939, 5930, 6063, 6238, 6328, 6349, 6451, 6397, 6384, 6551, 6717, 10460, 10423, 10389, 10380, 10353, 10328, 10463, 10535, 10519, 10473, 10450, 10415, 10233, 10207, 9988, 9996, 9698, 9662, 9307, 9209, 9135, 9564, 9480, 9277, 9087, 8958, 8881, 8859, 8747, 8486, 8358, 8207, 7949, 7854, 7854, 7742, 7712, 7564, 7413, 7268, 7047, 7084, 7091, 6923, 6922, 6766, 6700, 6630, 6543, 6659, 6522, 6376, 6451, 6233, 6249, 6308, 6303, 6285, 6175, 6163, 6100, 6138, 6188, 6200, 6274, 6220, 6143, 6170, 6048, 6172, 6241, 6262, 6195, 6073, 6056, 6292, 6490, 6591, 6694, 6775, 6752, 6749, 6860, 7104, 7236, 7303, 7333, 7466, 7383, 8063, 8206, 8291, 8180, 8342, 8675, 8590, 8946, 8985, 9133, 9320, 9550, 9613, 9665, 9957, 10538, 10892, 11050, 11213, 11215, 11223, 11636, 12057, 12626, 12917, 13280, 13491, 13849, 14471, 15009, 15557, 15759, 16146, 16264, 16411, 17060, 17317, 17738, 18019, 18056, 18249, 18437, 18807, 19292, 19687, 19714, 19853, 19947, 20145, 20097, 20475, 20903, 21024, 21012, 21198, 21230, 21458, 21897, 21943, 21912, 21745, 21692, 21763, 21884, 22213, 22489, 22623, 22418, 22373, 22447, 22579, 22838, 23069, 23097, 23255, 23133, 23243, 23435, 23509, 23708, 23821, 23912, 23718, 23640, 23501, 23881, 23857, 23891, 23593, 23524, 23432, 23226, 23029, 22809, 22309, 22008, 21657, 21168, 20875, 20573, 20497, 20113, 19609, 19130, 18968, 18572, 18388, 18147, 17918, 17284, 17093, 16616, 16174, 16129, 15788, 15190, 14775, 14396, 14047, 13799, 13616, 13103, 13045, 12491, 12120, 11862, 11536, 11272, 11026, 10846, 10466, 10114, 9802, 9595, 9465, 9359, 8970]
const ventValue = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 167, 258, 293, 390, 433, 449, 506, 561, 576, 623, 656, 650, 2961, 4047, 4142, 5798, 5937, 5986, 5962, 6170, 5981, 6033, 5940, 6098, 5733, 5603, 5569, 5514, 5474, 5463, 5194, 5266, 5119, 4867, 4760, 4803, 4708, 4712, 4846, 4762, 4852, 4810, 4758, 7067, 6793, 6550, 6392, 6349, 6350, 6164, 5940, 5744, 5532, 5467, 5260, 5032, 4907, 4871, 4714, 4621, 4380, 4232, 4221, 4223, 4079, 4028, 4008, 3669, 3950, 3854, 3754, 3662, 3520, 3476, 3298, 3238, 3088, 3022, 2885, 2738, 2726, 2716, 2636, 2591, 2584, 2518, 2433, 2380, 2321, 2301, 2292, 2247, 2214, 2069, 2159, 2077, 2021, 2044, 2099, 2104, 2049, 1982, 2080, 2104, 2102, 2167, 2129, 2192, 2169, 2182, 2254, 2263, 2322, 2314, 2352, 2343, 2362, 2403, 2414, 2444, 2467, 2709, 2729, 2723, 2723, 2748, 2771, 2762, 2701, 2698, 2645, 2664, 2701, 2721, 2714, 2628, 2566, 2507, 2529, 2422, 2602, 2574, 2555, 2526, 2481, 2444, 2467, 2375, 2330, 2288, 2204, 2131, 2112, 2161, 2143, 2128, 2087, 2062, 2055, 2075, 2041, 2027, 2038, 1998, 1956, 1912, 1879, 1881, 1906, 1923, 1716, 1619, 1562, 1513, 1574, 1647, 1662, 1608, 1577, 1595, 1570, 1558, 1545, 1560, 1508, 1509, 1511, 1513, 1497, 1510, 1543, 1534, 1501, 1485, 1514, 1609, 1650, 1638, 1651, 1667, 1646, 1663, 1757, 1775, 1773, 1740, 1791, 1762, 1804, 2042, 2083, 2147, 2180, 2230, 2176, 2300, 2283, 2354, 2399, 2477, 2502, 2553, 2633, 2734, 2832, 2876, 2850, 2947, 2977, 3111, 3202, 3365, 3622, 3766, 3945, 3939, 4156, 4379, 4699, 4860, 5058, 5103, 5233, 5455, 5626, 5987, 5986, 6028, 6148, 6245, 6520, 6643, 6855, 6871, 6992, 7006, 7095, 7067, 7251, 7621, 7444, 7488, 7515, 7535, 7699, 7702, 7782, 7848, 7786, 7786, 7695, 7783, 7830, 7819, 7792, 7831, 7809, 7878, 7948, 7885, 7930, 8004, 7990, 7910, 7939, 7930, 7976, 7946, 7900, 7908, 7791, 7878, 7786, 7879, 7902, 7878, 7772, 7755, 7797, 7772, 7688, 7564, 7370, 7236, 7110, 6989, 6857, 6832, 6806, 6642, 6483, 6329, 6291, 6086, 6047, 5920, 5732, 5596, 5475, 5342, 5260, 5216, 5121, 4970, 4849, 4648, 4538, 4454, 4406, 4271, 4180, 4118, 3932, 3915, 3804, 3755, 3685, 3567, 3466, 3335, 3245, 3171, 3169, 3094, 2973]
const newDeathValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 1, 3, 3, 3, 2, 4, 6, 1, 4, 4, 2, 6, 9, 5, 8, 15, 22, 22, 28, 51, 70, 62, 145, 101, 236, 241, 313, 410, 551, 505, 585, 908, 1006, 1175, 1287, 1478, 1342, 1314, 2038, 2003, 2051, 2083, 2075, 1700, 1633, 2352, 2545, 2194, 2118, 1895, 1763, 1816, 2479, 2085, 1809, 1974, 1629, 1219, 1290, 2078, 2676, 2160, 1809, 1527, 1248, 1028, 2490, 1918, 2748, 1784, 1456, 1035, 891, 1509, 1730, 1853, 1538, 1237, 873, 854, 1317, 1397, 1380, 1290, 1040, 688, 556, 665, 1335, 1235, 1174, 923, 655, 679, 971, 975, 883, 835, 714, 447, 675, 886, 893, 896, 766, 694, 355, 385, 720, 780, 682, 652, 615, 293, 288, 724, 704, 648, 618, 508, 273, 336, 579, 698, 699, 603, 296, 209, 237, 905, 819, 863, 839, 755, 472, 329, 741, 863, 941, 939, 876, 527, 376, 1041, 1149, 1070, 1175, 1014, 561, 1066, 1111, 1503, 1248, 1328, 1201, 496, 516, 1241, 1355, 1241, 1323, 1086, 621, 430, 1320, 1517, 1163, 1226, 1227, 617, 411, 1179, 1411, 1129, 1119, 1035, 577, 341, 1140, 1300, 1128, 1020, 1017, 477, 380, 1014, 1035, 1072, 999, 926, 452, 227, 347, 1088, 1161, 1015, 817, 392, 407, 1034, 1190, 880, 901, 747, 327, 281, 859, 1156, 938, 847, 873, 310, 246, 724, 1064, 862, 842, 738, 380, 331, 613, 929, 979, 913, 691, 471, 285, 718, 801, 928, 891, 780, 405, 443, 833, 1028, 1117, 949, 896, 391, 397, 922, 1047, 1060, 947, 958, 410, 475, 1517, 1131, 1154, 1185, 1125, 513, 577, 1358, 1577, 1112, 1301, 1353, 712, 607, 1553, 1885, 2010, 1910, 1551, 923, 853, 2091, 2281, 1392, 1404, 1243, 825, 1037, 2489, 2811, 2822, 2563, 2486, 1163, 1291, 2680, 3169, 3132, 2747, 2497, 1501, 1357, 2924, 3453, 3465, 2866, 2708, 1668, 1480, 3137, 3393, 2958, 1553, 1426, 1397, 1490, 3289, 3900, 3297, 2592, 2406, 1455, 1547, 3484, 3902, 4079, 3780, 3537, 2068, 1733, 4064, 4087, 3915, 3679, 3709, 2053, 1395, 2141, 4409, 3878, 3980, 3591, 1944, 1593, 3734, 4077, 4011, 3503, 2982, 2059, 1562, 3486, 3685, 5212, 3543, 2994, 1475, 1309, 2795, 3445, 3873, 5427, 3467, 1366, 1078, 1353, 2348, 2616, 2477, 2160, 1287, 1235, 2241, 2447, 3138, 2141, 1847, 1051, 1241, 1728, 2449, 1743]
const newPosValue = [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 3, 24, 30, 42, 126, 65, 132, 137, 170, 276, 388, 420, 683, 843, 1025, 1289, 1715, 2088, 3357, 4614, 6102, 6932, 9223, 11192, 10882, 12631, 17616, 19254, 19771, 19664, 21202, 24937, 26271, 28063, 31890, 33058, 25910, 28243, 30476, 30959, 35116, 33608, 31263, 28115, 24281, 25874, 29921, 31527, 31984, 27950, 27523, 25967, 26039, 29176, 31953, 34226, 35734, 27314, 22407, 25234, 26176, 30046, 32808, 29196, 25789, 22195, 22344, 25256, 27229, 27197, 25320, 21116, 18140, 22442, 21500, 26773, 25490, 23743, 20436, 20597, 20687, 21293, 26831, 24115, 22561, 19062, 18555, 16690, 19172, 22799, 23618, 23596, 21641, 20101, 19879, 20182, 20477, 23050, 22746, 19056, 16923, 16916, 20880, 21991, 23141, 25453, 21658, 18255, 22838, 24153, 27042, 30865, 32236, 29188, 26829, 33447, 39117, 39707, 44340, 43058, 41745, 39398, 47010, 51046, 53511, 54199, 54881, 45334, 40925, 50990, 62813, 59062, 67111, 62569, 61605, 57160, 58609, 69373, 70489, 76524, 64750, 64230, 56663, 62920, 69422, 71436, 75061, 64845, 60768, 54479, 58457, 64143, 68961, 67827, 60679, 53301, 42738, 51198, 52698, 54048, 60823, 53529, 50766, 41370, 54935, 56186, 51763, 57101, 56046, 42503, 37751, 40070, 45073, 43844, 46456, 46054, 37900, 34543, 36839, 44331, 44111, 46115, 43995, 38766, 31720, 42242, 30655, 44643, 51600, 44860, 33033, 28117, 22310, 30733, 37409, 44698, 41850, 34579, 33572, 34778, 40319, 43642, 46889, 45668, 35533, 39162, 48986, 39498, 43341, 55237, 47268, 34990, 35376, 36766, 44909, 45720, 49427, 50874, 38165, 37752, 38846, 51216, 55308, 56993, 57635, 46672, 43234, 46979, 57240, 63641, 68505, 57675, 47957, 57650, 60574, 61710, 73419, 82575, 83792, 64471, 63430, 72255, 79700, 89365, 97942, 91294, 141973, 83454, 119949, 105996, 119023, 129990, 132113, 112445, 118403, 135569, 149333, 157542, 174633, 167726, 147062, 149977, 159826, 168220, 187932, 197164, 186385, 154188, 154696, 166503, 188496, 129764, 198874, 151469, 137254, 150031, 181183, 203429, 216271, 230313, 219070, 182580, 181897, 217844, 216728, 220846, 236933, 226904, 187251, 193286, 193218, 234288, 242970, 241786, 204873, 197494, 179406, 193008, 224526, 206684, 126796, 190594, 153540, 164127, 199679, 229496, 226246, 182906, 280318, 208457, 179571, 219075, 250184, 272043, 295121, 269368, 228732, 195255, 218020, 224491, 225616, 246454, 218085, 187218, 150792, 146626, 189203, 186275, 190915, 177118, 144234, 133454, 146448, 153985, 157306, 167111, 148824, 119367, 120200, 117616, 116960, 123907, 131146, 114557, 95994, 77737, 92986, 95194, 102417, 101030, 90642, 72164, 55077, 56312, 66839, 66824, 74676, 72354, 58702, 52530, 69105, 73258, 75565, 74857, 71245, 54349, 48092, 54248, 66836, 65487]

/* Covid Tracking HighChart Death Value
  fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      deathValue.push(data[i].death);
    }
    console.log(deathValue);   
   });

//Covid Tracking HighChart Case Positive Value
  fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      posValue.push(data[i].positive);
    }
    console.log(posValue);   
   });

//Covid Tracking HighChart Hospitalized Value
  fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      hosValue.push(data[i].hospitalizedCurrently);
    }
    console.log(hosValue);   
   });
   
//Covid Tracking HighChart Ventilator Value
  fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      ventValue.push(data[i].onVentilatorCurrently);
    }
    console.log(ventValue);   
   });

//Covid Tracking HighChart ICU Value
fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      icuValue.push(data[i].inIcuCurrently);
    }
    console.log(icuValue);   
   });

//Covid Tracking HighChart New Death Value
fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      newDeathValue.push(data[i].deathIncrease);
    }
    console.log(newDeathValue);   
   });

//Covid Tracking HighChart New Case Value
fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      newPosValue.push(data[i].positiveIncrease);
    }
    console.log(newPosValue);   
   }); */

//John Hopkins D3 Charts
const data1 = Object.assign(d3.csvParse(("./nytimes_covid_19_data/nytimes_us_total.csv"), d3.autoType), {y: "# of Cases"});

const margin = ({top: 20, right: 30, bottom: 30, left: 40})
const height = 500
const width = 500

/*chart = {
  const svg = d3.select(DOM.svg(width, height))
      .style("-webkit-tap-highlight-color", "transparent")
      .style("overflow", "visible");

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);
  
  svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

  const tooltip = svg.append("g");

  svg.on("touchmove mousemove", function(event) {
    const {date, value} = bisect(d3.pointer(event, this)[0]);

    tooltip
        .attr("transform", `translate(${x(date)},${y(value)})`)
        .call(callout, `${cases}
${date}`);
  });

  svg.on("touchend mouseleave", () => tooltip.call(callout, null));

  return svg.node();
}*/

const line = d3.line()
    .defined(d => !isNaN(d.cases))
    .x(d => x(d.date))
    .y(d => y(d.cases));

const x = d3.scaleUtc()
    .domain(d3.extent(data1, d => d.date))
    .range([margin.left, width - margin.right]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data1, d => d.cases)]).nice()
    .range([height - margin.bottom, margin.top]);

const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data1.y));

callout = (g,value) => {
 if (!cases) return 
    g.style("display", "none");
    g.style("display", "null");
    g.style("pointer-events", "none");
    g.style("font", "10px sans-serif");
 
 const path = g.selectAll("path")
    .data([null])
    .join("path")
        .attr("fill", "white")
        .attr("stroke", "black")
 
 const text = g.selectAll("text")
    .data([null])
    .join("text")
    .call(text => 
        text.selectAll("tspan")
        .data((cases + "").split(/\n/))
           .join("tspan")
           .attr("x", 0)
           .attr("y", (d,i) => `${i * 1.1}em`)
           .style("font-weight"), (_, i) => i ? null : "bold")
           .text(d => d);
    
 const {x, y, width: w, height: h} = text.node().getBBox();
    
 text.attr("transform", `translate(${-w / 2}, ${15 - y})`);
 path.attr("d", `M${-w / 2 - 10},5H-515,-515,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
}

bisect = () => {
 const bisect = d3.bisector(d => d.date).left;
 return mx => {
  const date = x.invert(mx);
  const index = bisect(data, date, 1);
  const a = data[index - 1];
  const b = data[index];
  return b && (date - a.date > b.date - date) ? b : a; 
 };
}

/*async function getUsCountFromCovidApi() {
 const fish = await fetch('https://covid19-api.org/api/timeline/US').then(response => response.json())
  .then(data => {
   usTimelineDeath.push(data)
   usTimelineConfirm.push(data)
   console.log(usTimelineDeath)
  });
 
  await fetch('https://covid-api.com/api/reports?date=2020-03-13&q=US%20Alabama&iso=USA&region_name=US&region_province=Alabama').then(response => response.json())
  .then(data => {
   altimeline.push(data)
   console.log(altimeline)
  });
}

getUsCountFromCovidApi();*/

Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.High'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Plotly Time Series with Rangeslider Example',
  autosize: false,
  width: 500,
  height: 600,
  xaxis: {
    autorange: true,
    title: 'Dates',
    range: ['2015-02-17', '2017-02-16'],
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1 Month',
          step: 'month',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '6 Month',
          step: 'month',
          stepmode: 'backward'
        },
        {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1 Year'
        },
        {step: 'all'}
      ]},
    rangeslider: {range: ['2015-02-17', '2017-02-16']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [86.8700008333, 138.870004167],
    type: 'linear',
    title: 'Number Values'
  }
};

Plotly.newPlot('us-nytimes-average-chart', data, layout, {displayModeBar: false});
})

//New York Times Total Chart, Plotly
Plotly.d3.csv("./nytimes_covid_19_data/nytimes_us_total.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  // header values
  var headerNames = Plotly.d3.keys(rows[0]);
  var headerValues = [headerNames[0],headerNames[1],headerNames[2]];

  // cell values
  var cellValues = [];
  for (i = 0; i < headerValues.length; i++) {
    cellValue = unpack(rows, headerValues[i]);
    cellValues[i] = cellValue;
  }

  /* clean date
  for (i = 0; i < cellValues[0].length; i++) {
  var dateValue = cellValues[0][i].split(' ')[0]
  cellValues[0][i] = dateValue
  }*/

  // create table
  var table = {
    type: 'table',
    columnwidth: [600,600,600,600],
    columnorder: [0,1,2,3],
    header: {
      values: headerValues,
      align: "center",
      line: {width: 1, color: 'rgb(50, 50, 50)'},
      fill: {color: ['rgb(235, 100, 230)']},
      font: {family: "Arial", size: 11, color: "white"}
    },
    cells: {
      values: cellValues,
      align: ["center", "center"],
      line: {color: "black", width: 1},
      fill: {color: ['rgb(235, 193, 238)', 'rgba(228, 222, 249, 0.65)']},
      font: {family: "Arial", size: 10, color: ["black"]}
    },
    xaxis: 'x',
    yaxis: 'y',
    domain: {x: [0,0.5], y: [0,1]}
  }

  // create 1st plot
  var trace1 = {
    x: unpack(rows, 'date'),
    y: unpack(rows, 'cases'),
    xaxis: 'x1',
    yaxis: 'y1',
    mode: 'lines',
    line: {width: 2, color: '#fb0000'},
    name: 'Cases'
  }
  // create 2nd plot
  var trace2 = {
    x: unpack(rows, 'date'),
    y: unpack(rows, 'deaths'),
    xaxis: 'x2',
    yaxis: 'y2',
    mode: 'lines',
    line: {width: 2, color: '#b04553'},
    name: 'Deaths'
  }
  
  // create 3rd plot
  var trace3 = {
    x: unpack(rows, 'date'),
    y: unpack(rows, 'deaths'),
    xaxis: 'x3',
    yaxis: 'y3',
    mode: 'lines',
    line: {width: 2, color: '#000000'},
    name: 'Deaths'
  }

  var data = [table,trace1,trace3]

  // define subplot axes
  var axis = {
    showline: true,
    zeroline: false,
    showgrid: false,
    mirror:true,
    ticklen: 4,
    gridcolor: '#000000',
    tickfont: {size: 10},
  }

  var axis1 = {domain: [0.60, 1], anchor: 'y1'}
  var axis2 = {domain: [0.35, 1], anchor: 'y2', showticklabels: false}
  var axis3 = {domain: [0.60, 1], anchor: 'y3'}
  var axis4 = {domain: [0.52, 1], anchor: 'x1', hoverformat: '.1f'}
  var axis5 = {domain: [0.34, 0.64], anchor: 'x2', hoverformat: '.2f'}
  var axis6 = {domain: [0.0, 0.42], anchor: 'x3', hoverformat: '.1f'}

  // define layout
  var layout = {
    autosize: false,
    width: 500,
    height: 600,
    title: "Total US COVID-19 Cases and Deaths",
    plot_bgcolor: 'rgba(255, 255, 255, 1)',
    showlegend: false,
    xaxis1: Object.assign(axis1,axis),
    xaxis2: Object.assign(axis2,axis),
    xaxis3: Object.assign(axis3,axis),
    yaxis1: Object.assign(axis4,axis),
    yaxis2: Object.assign(axis5,axis),
    yaxis3: Object.assign(axis6,axis)
  }

  Plotly.newPlot('us-nytimes-chart', data, layout, {displayModeBar: false});

});

//New York Times State Chart, Plotly
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allCountryNames = unpack(rows, 'country'),
    allYear = unpack(rows, 'year'),
    allGdp = unpack(rows, 'gdpPercap'),
    listofCountries = [],
    currentCountry,
    currentGdp = [],
    currentYear = [];

  for (var i = 0; i < allCountryNames.length; i++ ){
    if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
      listofCountries.push(allCountryNames[i]);
    }
  }
  
  function getCountryData(chosenCountry) {
    currentGdp = [];
    currentYear = [];
    for (var i = 0 ; i < allCountryNames.length ; i++){
      if ( allCountryNames[i] === chosenCountry ) {
        currentGdp.push(allGdp[i]);
        currentYear.push(allYear[i]);
      } 
    }
  };

// Default Country Data
setBubblePlot('Afghanistan');
  
function setBubblePlot(chosenCountry) {
    getCountryData(chosenCountry);  

    var trace1 = {
      x: currentYear,
      y: currentGdp,
      mode: 'lines+markers',
      marker: {
        size: 12, 
        opacity: 0.5
      },
      name: 'Cases',
      line: {
        //color: 'rgb(219, 64, 82)',
        width: 3
      }
    };

    var data = [trace1];

    var layout = {
      title: 'COVID-19 Cases and Deaths according to States within United States<br>'+ chosenCountry + ' Cases and Deaths'
    };

    Plotly.newPlot('us-nytimes-state-chart', data, layout, {displayModeBar: false});
};
  
var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    countrySelector = innerContainer.querySelector('.countrydata');

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

  assignOptions(listofCountries, countrySelector);

  function updateCountry(){
    setBubblePlot(countrySelector.value);
  }
  
  countrySelector.addEventListener('change', updateCountry, false);
});

//https://plotly.com/javascript/time-series/
//https://plotly.com/javascript/plotly-fundamentals/

//Covid Tracking Project, High Chart New Cases
    // Create a timer
    var start = +new Date();

    // Create the chart
    Highcharts.stockChart('us-covidtrack-newcases-chart', {
        chart: {
            height: 600,
            events: {
                load: function () {
                    if (!window.TestController) {
                        this.setTitle(null, {
                            text: 'Built chart in ' + (new Date() - start) + 'ms'
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        rangeSelector: {

            buttons: [{
                type: 'week',
                count: 1,
                text: '1 Week'
            }, {
                type: 'month',
                count: 1,
                text: '1 Month'
            }, {
                type: 'month',
                count: 6,
                text: '6 Month'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },

        yAxis: {
            title: {
                text: 'Values'
            }
        },

        title: {
            text: 'New COVID-19 Cases, 2020-2021'
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },
        xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
      
    credits: {
        enabled: false
    },        

        series: [{            
            name: 'New Cases',
            data: newPosValue,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }]
});

//Covid Tracking Project, High Chart New Death
    // Create a timer
    const start2 = +new Date();

    // Create the chart
    Highcharts.stockChart('us-covidtrack-newdeaths-chart', {
        chart: {
            height: 600,
            events: {
                load: function () {
                    if (!window.TestController) {
                        this.setTitle(null, {
                            text: 'Built chart in ' + (new Date() - start2) + 'ms'
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        rangeSelector: {

            buttons: [{
                type: 'week',
                count: 1,
                text: '1 Week'
            }, {
                type: 'month',
                count: 1,
                text: '1 Month'
            }, {
                type: 'month',
                count: 6,
                text: '6 Month'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },

        yAxis: {
            title: {
                text: 'Values'
            }
        },

        title: {
            text: 'New COVID-19 Deaths, 2020-2021'
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },
        xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
      
    credits: {
        enabled: false
    },        

        series: [{
            name: 'New Deaths',
            data: newDeathValue,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }]
});

//Covid Tracking Project, High Chart Current Hospitalization
    // Create a timer
    const start3 = +new Date();

    // Create the chart
    Highcharts.stockChart('us-covidtrack-curhos-chart', {
        chart: {
            height: 600,
            events: {
                load: function () {
                    if (!window.TestController) {
                        this.setTitle(null, {
                            text: 'Built chart in ' + (new Date() - start3) + 'ms'
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        rangeSelector: {

            buttons: [{
                type: 'week',
                count: 1,
                text: '1 Week'
            }, {
                type: 'month',
                count: 1,
                text: '1 Month'
            }, {
                type: 'month',
                count: 6,
                text: '6 Month'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },

        yAxis: {
            title: {
                text: 'Values'
            }
        },

        title: {
            text: 'COVID-19 Hospitalization, 2020-2021'
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },
        xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
      
    credits: {
        enabled: false
    },        

        series: [{
            name: 'COVID-19 Hospitalizations',
            data: hosValue,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }]
});

//Covid Tracking Project, High Chart Current Ventilation
    // Create a timer
    const start4 = +new Date();

    // Create the chart
    Highcharts.stockChart('us-covidtrack-curvent-chart', {
        chart: {
            height: 600,
            events: {
                load: function () {
                    if (!window.TestController) {
                        this.setTitle(null, {
                            text: 'Built chart in ' + (new Date() - start4) + 'ms'
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        rangeSelector: {

            buttons: [{
                type: 'week',
                count: 1,
                text: '1 Week'
            }, {
                type: 'month',
                count: 1,
                text: '1 Month'
            }, {
                type: 'month',
                count: 6,
                text: '6 Month'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },

        yAxis: {
            title: {
                text: 'Values'
            }
        },

        title: {
            text: 'COVID-19 Individuals on Ventilators, 2020-2021'
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },
        xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
      
    credits: {
        enabled: false
    },        

        series: [{
            name: 'COVID19 Ventilators in Use',
            data: ventValue,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }]
});

//Covid Tracking Project, High Chart Current ICU
    // Create a timer
    const start5 = +new Date();

    // Create the chart
    Highcharts.stockChart('us-covidtrack-curicu-chart', {
        chart: {
            height: 600,
            events: {
                load: function () {
                    if (!window.TestController) {
                        this.setTitle(null, {
                            text: 'Built chart in ' + (new Date() - start5) + 'ms'
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        rangeSelector: {

            buttons: [{
                type: 'week',
                count: 1,
                text: '1 Week'
            }, {
                type: 'month',
                count: 1,
                text: '1 Month'
            }, {
                type: 'month',
                count: 6,
                text: '6 Month'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },

        yAxis: {
            title: {
                text: 'Values'
            }
        },

        title: {
            text: 'COVID-19 Individuals in ICU, 2020-2021'
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },
        xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
      
    credits: {
        enabled: false
    },        

        series: [{
            name: 'COVID-19 Individuals in ICU',
            data: icuValue,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }]
});


Highcharts.chart('us-covidtrack-totalcases-chart', {
    chart: {
        height: 600
    },
    title: {
        text: 'Total COVID-19 Cases, 2020-2021'
    },

    subtitle: {
        text: 'Source: covidtrackingproject.com'
    },
    yAxis: {
        title: {
            text: 'Values'
        }
       },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
        
        //categories: [dateValue] categories: ['Jan 2019', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2020', '1/15/2021']
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
    
    credits: {
        enabled: false
    },

    series: [{
        name: "Cases",
        data: posValue
    }]
});

Highcharts.chart('us-covidtrack-totaldeaths-chart', {
    chart: {
        height: 600
    },
    title: {
        text: 'Total COVID-19 Deaths, 2020-2021'
    },

    subtitle: {
        text: 'Source: covidtrackingproject.com'
    },
    yAxis: {
        title: {
            text: 'Values'
        }
       },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
        
        //categories: [dateValue] categories: ['Jan 2019', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2020', '1/15/2021']
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
    
    credits: {
        enabled: false
    },

    series: [{
        data: deathValue,
        name: "Deaths",
        lineWidth: 3
    }]
});

Highcharts.chart('us-covidtrack-state-chart', {
    chart: {
        zoomType: 'xy',
        height: 600
    },
    title: {
        text: 'Total COVID-19 Cases and Deaths Trajectory Comparison, 2020-2021'
    },
    subtitle: {
        text: 'Source: covidtrackingproject.com'
    },
    xAxis: [{
        type: 'datetime',
        title: {
            text: 'Date'
        },
        crosshair: true
    }],
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },
    
    credits: {
        enabled: false
    },
    
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} Cases',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Cases',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Deaths',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} Deaths',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Deaths',
        type: 'spline',
        yAxis: 1,
        data: deathValue,
        tooltip: {
            valueSuffix: ' Deaths'
        }

    }, {
        name: 'Cases',
        type: 'spline',
        data: posValue,
        tooltip: {
            valueSuffix: ' Cases'
        }
    }]
});
