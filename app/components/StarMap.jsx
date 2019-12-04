import React from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../utils.js";
import { Constellation } from "./Constellation.jsx";

const StarWrapper = styled.svg`
  transition: background 300ms ease-in-out;
  background:${({isDark}) => isDark ? darkTheme.backgroundColor : lightTheme.backgroundColor};
  fill:${({isDark}) => isDark ? darkTheme.starColor : lightTheme.starColor};
  position: absolute;
  width: 100%;
  bottom: -50%;
  z-index: 2;
      g circle {
        fill: ${({isDark}) => isDark ? darkTheme.starColor : lightTheme.starColor};
      }
`;

const BigCircle = styled.circle`
  stroke-dasharray: 1px;
  stroke-width: 3px;
  stroke: ${({isDark}) => isDark ? darkTheme.starColor : lightTheme.starColor};
`;

export function StarMap({isDark}) {
  return (
    <StarWrapper height="200%" viewBox="0 0 682 720" version="1.1" isDark={isDark}>
      <title>Star map</title>
      <desc>Constellations</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="background" transform="translate(13.000000, 0.000000)">
          <circle cx="231.391338" cy="333.361519" r="3.5"></circle>
          <circle cx="607.159753" cy="170.586414" r="3.5"></circle>
          <circle cx="586.347789" cy="152" r="3.5"></circle>
          <circle cx="588.847789" cy="145.361519" r="2.5"></circle>
          <circle cx="356.547767" cy="717.5" r="2.5"></circle>
          <circle cx="583.347789" cy="157.5" r="1.5"></circle>
          <circle cx="601.347789" cy="166.5" r="1.5"></circle>
          <circle cx="667.347789" cy="364.5" r="1.5"></circle>
          <circle cx="610.347789" cy="355.5" r="1.5"></circle>
          <circle cx="582.347789" cy="376.5" r="1.5"></circle>
          <circle cx="559.347789" cy="395.5" r="1.5"></circle>
          <circle cx="501.347789" cy="352.5" r="1.5"></circle>
          <circle cx="421.347789" cy="513.5" r="1.5"></circle>
          <circle cx="360.347789" cy="539.5" r="1.5"></circle>
          <circle cx="315.347789" cy="517.5" r="1.5"></circle>
          <circle cx="310.347789" cy="492.5" r="1.5"></circle>
          <circle cx="513.347789" cy="469.5" r="1.5"></circle>
          <circle cx="539.347789" cy="474.5" r="1.5"></circle>
          <circle cx="593.347789" cy="447.5" r="1.5"></circle>
          <circle cx="587.347789" cy="436.5" r="1.5"></circle>
          <circle cx="612.347789" cy="421.5" r="1.5"></circle>
          <circle cx="653.347789" cy="450.5" r="1.5"></circle>
          <circle cx="648.347789" cy="404.5" r="1.5"></circle>
          <circle cx="294.047767" cy="628.5" r="1.5"></circle>
          <circle cx="213.047767" cy="651.5" r="1.5"></circle>
          <circle cx="207.047767" cy="655.5" r="1.5"></circle>
          <circle cx="179.047767" cy="625.5" r="1.5"></circle>
          <circle cx="205.047767" cy="611.5" r="1.5"></circle>
          <circle cx="237.047767" cy="576.5" r="1.5"></circle>
          <circle cx="237.047767" cy="576.5" r="1.5"></circle>
          <circle cx="242.047767" cy="583.5" r="1.5"></circle>
          <circle cx="257.047767" cy="565.5" r="1.5"></circle>
          <circle cx="242.047767" cy="583.5" r="1.5"></circle>
          <circle cx="202.047767" cy="615.5" r="1.5"></circle>
          <circle cx="240.047767" cy="663.5" r="1.5"></circle>
          <circle cx="303.047767" cy="713.5" r="1.5"></circle>
          <circle cx="322.047767" cy="702.5" r="1.5"></circle>
          <circle cx="349.047767" cy="713.5" r="1.5"></circle>
          <circle cx="353.047767" cy="679.5" r="1.5"></circle>
          <circle cx="390.047767" cy="650.5" r="1.5"></circle>
          <circle cx="394.047767" cy="643.5" r="1.5"></circle>
          <circle cx="339.047767" cy="683.5" r="1.5"></circle>
          <circle cx="332.047767" cy="669.5" r="1.5"></circle>
          <circle cx="331.047767" cy="655.5" r="1.5"></circle>
          <circle cx="137.391338" cy="467.790561" r="1.5"></circle>
          <circle cx="143.391338" cy="433.790561" r="1.5"></circle>
          <circle cx="160.391338" cy="391.790561" r="1.5"></circle>
          <circle cx="149.391338" cy="381.790561" r="1.5"></circle>
          <circle cx="129.391338" cy="376.790561" r="1.5"></circle>
          <circle cx="123.391338" cy="384.790561" r="1.5"></circle>
          <circle cx="135.391338" cy="462.790561" r="1.5"></circle>
          <circle cx="141.391338" cy="461.790561" r="1.5"></circle>
          <circle cx="125.391338" cy="609.790561" r="1.5"></circle>
          <circle cx="103.391338" cy="616.790561" r="1.5"></circle>
          <circle cx="443.323978" cy="80" r="1.5"></circle>
          <circle cx="486.323978" cy="56" r="1.5"></circle>
          <circle cx="221.323978" cy="64" r="1.5"></circle>
          <circle cx="225.323978" cy="41" r="1.5"></circle>
          <circle cx="198.323978" cy="55" r="1.5"></circle>
          <circle cx="133.323978" cy="79" r="1.5"></circle>
          <circle cx="122.323978" cy="72" r="1.5"></circle>
          <circle cx="115.323978" cy="72" r="1.5"></circle>
          <circle cx="292.323978" cy="109" r="1.5"></circle>
          <circle cx="137.323978" cy="178" r="1.5"></circle>
          <circle cx="121.323978" cy="192" r="1.5"></circle>
          <circle cx="121.323978" cy="217" r="1.5"></circle>
          <circle cx="371.391338" cy="439.790561" r="1.5"></circle>
          <circle cx="328.391338" cy="440.790561" r="1.5"></circle>
          <circle cx="319.391338" cy="431.790561" r="1.5"></circle>
          <circle cx="491.323978" cy="53" r="2.5"></circle>
          <circle cx="179.145594" cy="26.1724906" r="1.5"></circle>
          <circle cx="305.145594" cy="17.1724906" r="1.5"></circle>
          <circle cx="317.145594" cy="2.17249061" r="1.5"></circle>
          <circle cx="320" cy="237.06569" r="1.5"></circle>
          <circle cx="255.135735" cy="215.000997" r="1.5"></circle>
          <circle cx="185.645594" cy="226.361519" r="1.5"></circle>
          <circle cx="265.635735" cy="195.267005" r="1.5"></circle>
          <circle cx="346.5" cy="189.267005" r="1.5"></circle>
          <circle cx="305.538131" cy="168.441454" r="1.5"></circle>
          <circle cx="100.645594" cy="108.361519" r="1.5"></circle>
          <circle cx="49.6455937" cy="169.361519" r="1.5"></circle>
          <circle cx="6.64559365" cy="185.361519" r="1.5"></circle>
          <circle cx="17.6455937" cy="213.361519" r="1.5"></circle>
          <circle cx="1.64559365" cy="255.361519" r="1.5"></circle>
          <circle cx="83.6455937" cy="323.361519" r="1.5"></circle>
          <circle cx="104.645594" cy="338.361519" r="1.5"></circle>
          <circle cx="176.645594" cy="296.361519" r="1.5"></circle>
          <circle cx="154.645594" cy="300.361519" r="1.5"></circle>
          <circle cx="149.645594" cy="302.361519" r="1.5"></circle>
          <circle cx="91.6455937" cy="276.361519" r="1.5"></circle>
          <circle cx="81.6455937" cy="276.361519" r="1.5"></circle>
          <circle cx="73.6455937" cy="261.361519" r="1.5"></circle>
          <circle cx="76.6455937" cy="222.361519" r="1.5"></circle>
          <circle cx="91.6455937" cy="219.361519" r="1.5"></circle>
          <circle cx="96.6455937" cy="214.361519" r="1.5"></circle>
          <circle cx="97.6455937" cy="225.361519" r="1.5"></circle>
          <circle cx="179.645594" cy="335.361519" r="1.5"></circle>
          <circle cx="297.323978" cy="82" r="1.5"></circle>
        </g>
        <Constellation
          isDark={isDark}
          id="cancer"
          transform="translate(586.000000, 239.000000)"
        >
          <text x="50" y="50">
            the crab
          </text>
          <circle cx="39.3477893" cy="17.5" r="1.5"></circle>
          <circle cx="54.3477893" cy="30.5" r="1.5"></circle>
          <circle cx="71.3477893" cy="67.5" r="1.5"></circle>
          <circle cx="2.34778934" cy="1.5" r="1.5"></circle>
        </Constellation>
        <Constellation isDark={isDark} id="crow" transform="translate(481.000000, 553.000000)">
          <text x="20" y="20">
            the crow
          </text>
          <path
            stroke="#979797"
            d="M35.1919404 38.695789 31.2218084 28.0118351 21.0318631 2.9384105 4.19673341 1.20983165 2.68400113 34.3996293 30.6007012 28.0118351"
          ></path>
          <circle fill="#d3d3d3" cx="3.09506598" cy="34.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="21.095066" cy="3.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="35.3477893" cy="38.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="31.3477893" cy="28.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="4.34778934" cy="1.5" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="scorpion"
          transform="translate(196.000000, 576.000000)"
        >
          <text x="30" y="65">
            the scorpion
          </text>
          <path
            d="M66.6968368,16.4935333 L61.1184373,1.7739624"
            stroke="#979797"
          ></path>
          <path
            stroke="#979797"
            d="M69.244774 47.9431967 67.3465863 31.9853998 67.3465863 15.5999682 43.5905188 28.8796227 32.5294589 31.9853998 25.663049 41.1444425 9.30953043 71.038026 6.5752211 94.7596275 2.58864405 120.448349"
          ></path>
          <circle fill="#d3d3d3" cx="33.3913376" cy="32.5" r="3.5"></circle>
          <circle fill="#d3d3d3" cx="8.54776684" cy="72.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="6.54776684" cy="94.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="66.0477668" cy="16.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="61.0477668" cy="2.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="67.0477668" cy="32.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="43.0477668" cy="29.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="69.0477668" cy="47.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="2.04776684" cy="120.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="26.0477668" cy="41.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="33.5477668" cy="31.5" r="3.5"></circle>
        </Constellation>
        <Constellation isDark={isDark} id="hydra" transform="translate(334.000000, 578.000000)">
          <text x="50" y="50">
            hydra
          </text>
          <path
            stroke="#979797"
            d="M2.67662817 41.4917394 48.5875015 33.1845953 100.547969 13.9825343 206.329941 64.4244655 231.739956 49.3643143 249.358418 0.470382019"
          ></path>
          <circle fill="#d3d3d3" cx="231.347789" cy="49.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="206.347789" cy="64.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="2.04776684" cy="41.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="48.5477668" cy="33" r="3"></circle>
          <circle fill="#d3d3d3" cx="100.547767" cy="15" r="3"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="scales"
          transform="translate(282.000000, 535.000000)"
        >
          <text x="50" y="50">
            the scales
          </text>
          <path
            d="M53.5559496,29.5512213 L39.895927,71.0205849"
            stroke="#979797"
          ></path>
          <path
            stroke="#979797"
            d="M2.24596071 92.6249537 4.2413377 84.8447383 7.57556826 22.7908882 27.9742463 1.55607185 53.3412376 29.7153522 9.54307397 24.5158106"
          ></path>
          <circle fill="#d3d3d3" cx="2.04776684" cy="92.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="4.04776684" cy="84.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="7.54776684" cy="24" r="2"></circle>
          <circle fill="#d3d3d3" cx="39.5477668" cy="72" r="3"></circle>
          <circle fill="#d3d3d3" cx="53.0477668" cy="29.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="27.0477668" cy="2.5" r="2.5"></circle>
        </Constellation>
        <Constellation isDark={isDark} id="wolf" transform="translate(258.000000, 646.000000)">
          <text x="30" y="30">
            the wolf
          </text>
          <path
            stroke="#979797"
            d="M69.8883467 54.1188235 43.8610792 39.1819747 29.4359595 42.3506658 1.90896308 26.7586426 43.8610792 15.8656626 12.6673624 0.75716303 1.90896308 24.9865288"
          ></path>
          <path
            d="M29.2481912,41.691462 L43.9118491,63.8819701"
            stroke="#979797"
          ></path>
          <path
            d="M2.09431378,26.6401794 L38.3835631,72.1606994"
            stroke="#979797"
          ></path>
          <circle fill="#d3d3d3" cx="44.5477668" cy="39.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="29.5477668" cy="42.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="69.5477668" cy="54.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="13.0477668" cy="1.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="2.04776684" cy="26.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="44.0477668" cy="63.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="43.5477668" cy="15.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="26.0477668" cy="50.5" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="centaur"
          transform="translate(324.000000, 659.000000)"
        >
          <text x="50" y="50">
            the centaur
          </text>
          <path
            d="M78.6197779,32.3960207 L78.6197779,38.7823955"
            stroke="#979797"
          ></path>
          <path
            stroke="#979797"
            d="M2.79913163 34.2737884 28.6876402 35.4138763 69.4406548 35.4138763 61.1840852 30.4143625 45.0233798 11.5666452 60.0369014 2.53740202 78.4509753 32.2490682 100.09451 18.9756391 111.295912 3.47959077 158.635575 23.4090512"
          ></path>
          <circle fill="#d3d3d3" cx="2.54776684" cy="34.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="28.5477668" cy="35.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="78.5477668" cy="32.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="78.5477668" cy="38.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="111.547767" cy="3.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="60.5477668" cy="2.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="69.0477668" cy="35.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="61.0477668" cy="30.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="100.047767" cy="19.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="45.0477668" cy="11.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="158.347789" cy="23.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="143.347789" cy="24.5" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="crater"
          transform="translate(523.000000, 484.000000)"
        >
          <text x="50" y="50">
            the cup
          </text>
          <path
            stroke="#979797"
            d="M3.00020955 67.2999935 16.1760004 69.040725 39.9348989 61.734072 63.5256166 87.0188726 73.437229 56.3252828 84.7077905 41.3768428 116.853627 35.3333863 129.634132 1.07485689 138.330424 1.07485689 146.849942 1.07485689"
          ></path>
          <path
            d="M73.3881252,56.2000679 L42.8614884,44.4396956"
            stroke="#979797"
          ></path>
          <path
            stroke="#979797"
            d="M40.3314125 60.78514 42.5668653 44.5379033 31.6670379 26.0503032 16.5049962 26.0503032"
          ></path>
          <circle fill="#d3d3d3" cx="42.595066" cy="45" r="3"></circle>
          <circle fill="#d3d3d3" cx="83.595066" cy="42" r="3"></circle>
          <circle fill="#d3d3d3" cx="129.347789" cy="1.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="116.347789" cy="35.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="138.347789" cy="2.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="73.3477893" cy="56.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="63.3477893" cy="86.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="40.3477893" cy="61.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="16.3477893" cy="25.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="31.3477893" cy="26.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="16.3477893" cy="69.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="2.34778934" cy="67.5" r="1.5"></circle>
        </Constellation>
        <Constellation isDark={isDark} id="aquila" transform="translate(0.000000, 375.000000)">
          <path
            stroke="#979797"
            d="M41.8329115 14.2608179 53.2455462 6.77560816 62.4355611 1.61020796 65.2620324 48.0812837 111.41286 14.2608179 118.659078 14.2608179"
          ></path>
          <text x="50" y="20">
            the eagle
          </text>
          <path
            stroke="#979797"
            d="M110.21631 15.4016034 71.2862083 94.8550819 65.0899586 49.099387"
          ></path>
          <path
            stroke="#979797"
            d="M65.3401029 47.6351665 29.2683384 40.463832 0.826771785 35.3828755 42.2184842 60.3861529 69.8267676 94.6463628"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="53.6455937"
            cy="7.79056122"
            r="3.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="62.6455937"
            cy="3.29056122"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="65.1455937"
            cy="48.7905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="70.1455937"
            cy="95.2905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="41.6455937"
            cy="14.2905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="118.391338"
            cy="13.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="110.391338"
            cy="15.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="67.3913376"
            cy="23.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="28.6455937"
            cy="40.6169074"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="1.64559365"
            cy="35.6169074"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="42.1455937"
            cy="60.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="74.1455937"
            cy="100.790561"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation isDark={isDark} id="scutum" transform="translate(89.000000, 476.000000)">
          <text x="50" y="20">
            the shield
          </text>
          <path
            stroke="#979797"
            d="M3.86298445 2.01014574 2.35730484 23.1085597 9.89360033 55.358109 11.4144768 22.0555843Z"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="3.39133761"
            cy="1.79056122"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="2.39133761"
            cy="23.7905612"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="10.8913376" cy="22.2905612" r="2"></circle>
          <circle fill="#d3d3d3" cx="9.89133761" cy="55.2905612" r="2"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="ophiuchus"
          transform="translate(137.000000, 428.000000)"
        >
          <text x="50" y="50">
            the serpent bearer
          </text>
          <path
            stroke="#979797"
            d="M54.2065195 3.83307408 36.4577627 32.2586577 29.5594399 38.3310711 3.09331691 87.986486 22.306244 118.745551 54.2065195 127.299523 36.4577627 33.160675"
          ></path>
          <path
            stroke="#979797"
            d="M54.6277716 4.43303925 83.8077795 26.728766 103.415152 58.1375807 117.404552 82.3812795 111.510852 86.2133974 101.58462 99.7879284 90.3346346 107.076867 83.356858 27.728766"
          ></path>
          <path
            stroke="#979797"
            d="M90.2644259 107.665343 94.1744117 135.221616 98.0409957 143.475605 100.239166 151.928731 98.0409957 166.229603"
          ></path>
          <path
            stroke="#979797"
            d="M90.4099494 106.533069 54.063549 127.004646 33.7145178 168.997102 25.1682054 194.535193"
          ></path>
          <circle fill="#d3d3d3" cx="52.1455937" cy="127.5" r="3.5"></circle>
          <circle fill="#d3d3d3" cx="90.3913376" cy="107.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="3.14559365" cy="87.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="91.0477668" cy="156.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="98.0477668" cy="166.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="100.047767" cy="151.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="98.0477668" cy="143.5" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="42.3913376"
            cy="110.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="22.3913376"
            cy="118.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="20.3913376"
            cy="107.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="37.3913376"
            cy="149.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="28.3913376"
            cy="164.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="25.3913376"
            cy="194.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="33.3913376"
            cy="168.790561"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="94.0477668" cy="135.5" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="101.391338"
            cy="99.7905612"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="111.391338" cy="86.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="117.391338" cy="82.5" r="2.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="103.391338"
            cy="58.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="29.3913376"
            cy="38.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="54.1455937"
            cy="4.36151869"
            r="3.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="36.1455937"
            cy="32.3615187"
            r="3.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="83.1455937"
            cy="28.3615187"
            r="3.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="88.3913376"
            cy="23.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="52.3913376"
            cy="38.7905612"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="serpens"
          transform="translate(96.000000, 426.000000)"
        >
          <Constellation
            isDark={isDark}
            id="serpens-cauda"
            transform="translate(0.000000, 6.000000)"
          >
            <text x="20" y="20">
              the serpent's tail
            </text>
            <path
              stroke="#979797"
              d="M2.36254832 1.64573479 28.8044174 48.3319603 39.436566 74.6551129"
            ></path>
            <circle
              fill="#d3d3d3"
              cx="2.39133761"
              cy="1.79056122"
              r="1.5"
            ></circle>
            <circle
              fill="#d3d3d3"
              cx="28.3913376"
              cy="47.7905612"
              r="1.5"
            ></circle>
          </Constellation>
          <Constellation
            isDark={isDark}
            id="serpens-caput"
            transform="translate(166.000000, 0.000000)"
          >
            <text x="50" y="20">
              the serpent's head
            </text>
            <path
              stroke="#979797"
              d="M31.0933698 1.70352661 23.4048801 6.01561667 16.5691067 14.4049168 25.2520069 16.6056401"
            ></path>
            <path
              stroke="#979797"
              d="M25.4422086 16.389908 33.5353557 35.4764594 25.4422086 48.6871817 17.3248075 55.8956993 15.7993642 85.4624933 0.708325499 85.4624933"
            ></path>
            <circle fill="#d3d3d3" cx="24.1455937" cy="48.5" r="3.5"></circle>
            <circle fill="#d3d3d3" cx="33.5477668" cy="35.5" r="2.5"></circle>
            <circle fill="#d3d3d3" cx="15.5477668" cy="85.5" r="2.5"></circle>
            <circle fill="#d3d3d3" cx="17.3477893" cy="56.5" r="1.5"></circle>
            <circle
              fill="#d3d3d3"
              cx="16.3913376"
              cy="13.7905612"
              r="1.5"
            ></circle>
            <circle
              fill="#d3d3d3"
              cx="23.3913376"
              cy="5.79056122"
              r="1.5"
            ></circle>
            <circle
              fill="#d3d3d3"
              cx="30.3913376"
              cy="1.79056122"
              r="1.5"
            ></circle>
            <circle
              fill="#d3d3d3"
              cx="25.3913376"
              cy="15.7905612"
              r="1.5"
            ></circle>
          </Constellation>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="canes-venatici"
          transform="translate(403.000000, 335.000000)"
          fill="#d3d3d3"
        >
          <text x="15" y="20">
            the hounds
          </text>
          <circle cx="2.91477131" cy="17.8615187" r="2.5"></circle>
          <circle cx="13.9147713" cy="1.86151869" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="bernices-curl"
          transform="translate(404.000000, 376.000000)"
        >
          <text x="50" y="20">
            the curl of berenice
          </text>
          <path
            stroke="#979797"
            d="M36.6018419 2.40383738 2.64017726 14.9761793 12.5030082 50.913573"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="36.3809225"
            cy="1.86151869"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="2.38092254"
            cy="14.8615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="12.3809225"
            cy="50.8615187"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="lesser-lion"
          transform="translate(491.000000, 262.000000)"
        >
          <text x="50" y="20">
            the little lion
          </text>
          <path
            stroke="#979797"
            d="M40.4703678 2.59896668 26.4409723 27.6501489 20.2137087 43.630364 2.57266069 58.3337207 10.3874008 37.0007869 24.0328219 27.6501489"
          ></path>
          <circle fill="#d3d3d3" cx="2.32397788" cy="59" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="10.3239779" cy="37" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="20.3239779" cy="44" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="26.3239779" cy="28" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="40.3239779" cy="2" r="1.5"></circle>
        </Constellation>
        <Constellation isDark={isDark} id="lynx" transform="translate(439.000000, 103.000000)">
          <text x="50" y="20">
            the lynx
          </text>
          <path
            stroke="#979797"
            d="M107.54759 155.726393 99.530448 147.819944 99.530448 133.892093 86.4946562 121.880216 90.5610158 89.2598073 65.5922201 36.9092258 15.2850051 24.1088205 7.18335115 18.6331841 2.10499733 2.3913959"
          ></path>
          <circle fill="#d3d3d3" cx="107.347789" cy="155.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="99.3239779" cy="148" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="98.3239779" cy="134" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="86.3239779" cy="122" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="90.3239779" cy="89" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="65.3239779" cy="37" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="15.3239779" cy="24" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="7.32397788" cy="19" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="2.32397788" cy="2" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="leopard"
          transform="translate(343.000000, 37.000000)"
        >
          <text x="50" y="20">
            the leopard
          </text>
          <path
            stroke="#979797"
            d="M82.0576938 1.74308782 60.8893109 33.4454335 38.1236554 55.2185699 55.4465291 92.6931977 31.6943819 122.269865"
          ></path>
          <path
            stroke="#979797"
            d="M38.3004604 55.7007655 3.26493824 65.9092462 10.1060871 37.8936871 3.26493824 5.05416366"
          ></path>
          <circle fill="#d3d3d3" cx="81.3239779" cy="2" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="61.3239779" cy="34" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="38.3239779" cy="55" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="55.3239779" cy="93" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="31.3239779" cy="122" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="2.32397788" cy="66" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="9.32397788" cy="38" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="3.32397788" cy="5" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="cassiopeia"
          transform="translate(217.000000, 56.000000)"
        >
          <text x="50" y="20">
            cassiopeia
          </text>
          <path
            stroke="#979797"
            d="M3.51866405 33.7638198 7.27287933 6.27838123 32.1398372 16.3609227 46.3236055 2.64999077 70.7164025 12.13652"
          ></path>
          <circle fill="#d3d3d3" cx="7.64559365" cy="6" r="3.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="3.14559365"
            cy="33.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="32.1455937"
            cy="15.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="46.1455937"
            cy="2.76700465"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="70.3239779" cy="12" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="28.3239779" cy="35" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="northern-crown"
          transform="translate(279.000000, 386.000000)"
        >
          <text x="0" y="32">
            the northern crown
          </text>
          <path
            stroke="#979797"
            d="M2.55096312 4.71005035 3.349342 15.6495281 9.27867936 18.795696 14.5380751 18.795696 20.3231927 18.795696 26.6051882 9.82250516 23.3060929 1.6651084"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="21.0477668"
            cy="17.7905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="9.39133761"
            cy="18.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="14.3913376"
            cy="18.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="3.39133761"
            cy="15.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="2.39133761"
            cy="4.79056122"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="23.3913376"
            cy="1.79056122"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="26.3913376"
            cy="9.79056122"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="hercules"
          transform="translate(186.000000, 316.000000)"
        >
          <text x="50" y="20">
            hercules
          </text>
          <path
            stroke="#979797"
            d="M48.6346099 2.62060554 23.9633857 24.7603454 44.8399124 35.5716296 51.7287868 38.6506328 53.5420478 61.1482199 35.4928933 79.3668144 23.9633857 69.6240138 15.5836921 58.6622567 9.08048333 50.6796091 11.0088118 46.4284351"
          ></path>
          <path
            d="M1.02449598,47.1871217 L9.22210483,50.6404103"
            stroke="#979797"
          ></path>
          <path
            stroke="#979797"
            d="M35.7736073 78.0416418 24.3616962 114.606543 68.1012439 99.3278592 73.369058 108.884782 66.566168 127.772285 58.5999586 134.55115"
          ></path>
          <path
            stroke="#979797"
            d="M68.5400177 98.6791821 68.5400177 63.7264899 53.8758699 61.7387309"
          ></path>
          <path
            stroke="#979797"
            d="M108.057474 34.304623 98.7066619 23.2341208 94.0040694 17.9030829 82.0471684 27.6610572 74.0569339 38.0816179 51.6288931 38.0816179"
          ></path>
          <path
            stroke="#979797"
            d="M73.9835941 38.0613862 72.5610567 46.5283288 68.3187341 63.1701197"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="24.1455937"
            cy="115.361519"
            r="3.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="72.3913376"
            cy="46.8615187"
            r="3.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="50.6455937"
            cy="38.3615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="67.6455937"
            cy="63.3615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="35.1455937"
            cy="78.4062299"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="15.1455937"
            cy="58.8615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="73.3913376"
            cy="109.361519"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="67.3913376"
            cy="98.6169074"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="48.8913376" cy="1.5" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="24.6455937"
            cy="24.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="44.6455937"
            cy="35.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="73.6455937"
            cy="38.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="81.6455937"
            cy="28.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="93.6455937"
            cy="18.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="98.6455937"
            cy="23.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="107.645594"
            cy="34.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="53.6455937"
            cy="61.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="24.6455937"
            cy="69.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="66.3913376"
            cy="127.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="58.3913376"
            cy="134.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="10.6455937"
            cy="46.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="9.64559365"
            cy="50.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="1.64559365"
            cy="47.3615187"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation isDark={isDark} id="lyra" transform="translate(157.000000, 314.000000)">
          <text x="10" y="30">
            the harp
          </text>
          <path
            stroke="#979797"
            d="M32.5040874 6.85830055 23.2949531 6.85830055 16.5777023 3.65422288 3.63233628 13.6807076 10.3161283 16.9150575 23.2949531 7.2846402"
          ></path>
          <circle fill="#d3d3d3" cx="3.14559365" cy="14" r="2.5"></circle>
          <BigCircle isDark={isDark} fill="red" cx="35" cy="8" r="3" ></BigCircle>
          <circle
            fill="#d3d3d3"
            cx="23.6455937"
            cy="6.36151869"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="16.6455937"
            cy="3.36151869"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="10.6455937"
            cy="16.3615187"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="lacerta"
          transform="translate(85.000000, 130.000000)"
        >
          <text x="50" y="20">
            the lizard
          </text>
          <path
            stroke="#979797"
            d="M1.82199847 29.3535049 12.1970203 29.3535049 30.3226925 12.3148265 37.4195272 2.28594242 55.2931869 13.3896752 67.8523173 12.3148265 77.2243495 18.5189904 64.1601819 17.3591255 55.2931869 13.8197237 49.2064264 20.2952233 30.0857214 12.3896752"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="12.6455937"
            cy="29.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="1.64559365"
            cy="29.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="30.6455937"
            cy="12.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="48.6455937"
            cy="20.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="55.6455937"
            cy="13.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="63.6455937"
            cy="17.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="77.6455937"
            cy="19.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="68.6455937"
            cy="11.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="37.6455937"
            cy="2.36151869"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="delphinus"
          transform="translate(17.000000, 304.000000)"
        >
          <text x="20" y="20">
            the dolphin
          </text>
          <path
            stroke="#979797"
            d="M2.7894852 33.7332464 10.3476041 16.467759 15.1230104 9.52681405 8.95624782 2.68641831 7.75402548 8.53589688 9.95624782 16.3338602"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="3.14559365"
            cy="33.8615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="10.1455937"
            cy="16.8615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="9.14559365"
            cy="2.86151869"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="7.64559365" cy="9" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="14.6455937" cy="10" r="1.5"></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="sagitta"
          transform="translate(77.000000, 333.000000)"
        >
          <text x="20" y="20">
            the arrow
          </text>
          <path
            stroke="#979797"
            d="M2.49428096 2.15867166 7.71763614 13.2578489 10.2315794 21.3589362"
          ></path>
          <path
            d="M8.49317588,13.7103225 L13.6984321,21.2268139"
            stroke="#979797"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="13.8913376"
            cy="21.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="9.64559365"
            cy="21.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="2.2063125"
            cy="2.36151869"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="8.14559365"
            cy="13.8615187"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation isDark={isDark} id="swan" transform="translate(67.000000, 226.000000)">
          <text x="50" y="20">
            the swan
          </text>
          <path
            stroke="#979797"
            d="M81.0720234 6.51063354 58.2248955 2.12909245 2.71877904 11.1515052 32.5876207 26.639477 68.7189312 31.0043543"
          ></path>
          <path
            stroke="#979797"
            d="M81.3469763 6.8241215 98.4888314 17.4285549 95.5726643 20.3124359"
          ></path>
          <path
            stroke="#979797"
            d="M99.0720649 18.3231933 129.1742 33.1071191 139.982765 34.9390969"
          ></path>
          <path
            stroke="#979797"
            d="M129.867831 32.5853335 121.678609 34.1788105 102.206945 41.8368736 69.1094893 30.6710781 63.8645544 62.7499578 60.3411997 72.6066026 58.846664 100.399758"
          ></path>
          <circle fill="#d3d3d3" cx="80.5040956" cy="6.5" r="3.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="102.145594"
            cy="41.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="68.1455937"
            cy="30.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="33.1455937"
            cy="26.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="3.14559365"
            cy="11.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="59.1455937"
            cy="99.7670047"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="58.3239779" cy="2" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="121.645594"
            cy="33.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="129.645594"
            cy="32.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="139.645594"
            cy="34.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="95.6455937"
            cy="20.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="63.6455937"
            cy="62.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="59.6455937"
            cy="72.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="98.6455937"
            cy="17.3615187"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="bootes"
          transform="translate(313.000000, 318.000000)"
        >
          <text x="50" y="85">
            the herdsman
          </text>
          <path
            stroke="#979797"
            d="M29.5948234 132.548655 48.7286227 110.893309 24.3759225 86.1059719 2.27454477 65.0301424 11.4882001 42.0220498 31.7484746 47.9099988 37.9489716 20.3813548 29.5948234 1.70661039"
          ></path>
          <path
            d="M37.8171154,20.3243799 L37.8171154,0.711991414"
            stroke="#979797"
          ></path>
          <path
            stroke="#979797"
            d="M72.3959963 121.49878 72.3959963 114.647141 65.9789947 112.299775 48.8962917 112.299775 33.207032 73.6121902 30.6643236 79.7866416"
          ></path>
          <path
            d="M32.5103104,73.8482291 L32.5103104,47.3207155"
            stroke="#979797"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="31.0477668"
            cy="48.7905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="24.0477668"
            cy="86.7905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="66.0477668"
            cy="112.790561"
            r="2.5"
          ></circle>
          <BigCircle isDark={isDark} fill="red" cx="48" cy="110" r="3" ></BigCircle>
          <circle
            fill="#d3d3d3"
            cx="2.39133761"
            cy="64.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="31.3913376"
            cy="78.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="72.3913376"
            cy="114.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="72.3913376"
            cy="121.790561"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="29.3913376"
            cy="132.790561"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="32.8913376" cy="74.2905612" r="2"></circle>
          <circle
            fill="#d3d3d3"
            cx="11.3913376"
            cy="41.7905612"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="37.6074351"
            cy="20.8615187"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="30.6074351" cy="2" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="37.1074351" cy="1.5" r="1.5"></circle>
        </Constellation>
        <Constellation isDark={isDark} id="whale" transform="translate(184.000000, 141.000000)">
          <text x="50" y="20">
            the whale
          </text>
          <path
            stroke="#979797"
            d="M35.8161962 68.1630006 28.1040669 61.287326 28.1040669 44.6149271 10.0945617 32.8688012 1.59046074 13.2666305 7.02872425 16.6979262 8.81589377 5.00326105 47.7585705 2.90296617 100.553773 9.75683541 62.0323768 37.510732 29.926125 44.6149271"
          ></path>
          <path
            d="M47.6617546,2.89075515 L61.3389655,37.636331"
            stroke="#979797"
          ></path>
          <circle
            fill="#d3d3d3"
            cx="28.1455937"
            cy="44.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="10.1455937"
            cy="32.7670047"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="9.14559365"
            cy="5.76700465"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="47.1455937"
            cy="2.76700465"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="88.3239779" cy="12" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="36.3239779" cy="24" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="20.3239779" cy="33" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="28.6455937"
            cy="61.3615187"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="6.91259136"
            cy="16.9006627"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="1.91259136"
            cy="13.9006627"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="100.635735"
            cy="9.59927082"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="61.8913376"
            cy="37.5864139"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="35.8913376"
            cy="67.5864139"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="36.1455937"
            cy="68.0009967"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="47.0040956"
            cy="3.11866471"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="lesser-bear"
          transform="translate(306.000000, 176.000000)"
        >
          <text x="20" y="20">
            the little bear
          </text>
          <path
            stroke="#979797"
            d="M20.2112784 3.50176727 12.1113916 17.0245412 6.71413705 34.2848618 11.1113916 53.1416099 22.9339362 66.8822605 14.8240366 75.4547476 2.42388843 58.2537022 9.98789472 53.1416099"
          ></path>
          <circle fill="#d3d3d3" cx="23" cy="66.2269037" r="3.5"></circle>
          <circle fill="#d3d3d3" cx="20" cy="3.58641394" r="3.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="15.0381313"
            cy="75.2269037"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="11.5381313"
            cy="17.2670047"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="6.43118535"
            cy="34.5009967"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="11.0381313"
            cy="53.0684386"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="2.43118535"
            cy="58.5656899"
            r="1.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="dragon"
          transform="translate(232.000000, 210.000000)"
        >
          <text x="50" y="20">
            the dragon
          </text>
          <path
            stroke="#979797"
            d="M155.210992 25.7879491 137.242976 36.9558875 114.377495 66.477209 83.7661353 86.7321034 65.8267466 86.7321034 59.860163 72.2896458 48.6724057 51.0955567 39.8574087 21.7867377 45.1798788 17.4673231"
          ></path>
          <path
            stroke="#979797"
            d="M21.1461847 2.3025774 18.5190822 18.0861125 16.013095 70.2009562 4.06231093 85.9503588 18.5190822 91.6846211 22.8021622 81.8346382 16.7663526 71.5554051"
          ></path>
          <path
            d="M18.8475944,18.8597785 L40.4398972,21.8917873"
            stroke="#979797"
          ></path>
          <circle fill="#d3d3d3" cx="3.50409556" cy="85.5" r="3.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="49.1357348"
            cy="50.8698725"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="18.3913376"
            cy="18.5684386"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="59.5890013" cy="73" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="17.3913376" cy="91.5" r="2.5"></circle>
          <circle fill="#d3d3d3" cx="15.8913376" cy="70.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="22.8913376" cy="81.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="83.5381313" cy="86.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="114.107435" cy="66" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="136.5" cy="37.2269037" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="65.5477668" cy="85.5" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="40.1357348"
            cy="21.5684386"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="45.1357348"
            cy="17.5684386"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="20.8913376"
            cy="2.00099668"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="154.5" cy="25.0656899" r="1.5"></circle>
        </Constellation>
        <Constellation isDark={isDark} id="lion" transform="translate(487.000000, 283.000000)">
          <text x="30" y="50">
            the lion
          </text>
          <path
            stroke="#979797"
            d="M44.5109151 151.673832 33.5655839 134.552814 33.5655839 112.352504 4.08389069 132.013168 23.2974029 93.4353504 33.7042922 113.07171 89.3416201 67.1409966 102.599116 86.0027161"
          ></path>
          <path
            stroke="#979797"
            d="M22.9576386 92.7604317 69.5942637 64.6698714 89.7654992 67.277179 84.2352293 25.7496503 97.4404171 16.3449447 89.7654992 0.661416842 69.5942637 24.2796014 83.7137738 25.7496503"
          ></path>
          <path
            stroke="#979797"
            d="M70.3031339 23.8494091 62.1240704 49.9522468 69.0504358 63.9961742"
          ></path>
          <circle fill="#d3d3d3" cx="4.32397788" cy="131.5" r="3.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="102.847789"
            cy="86.2905612"
            r="3.5"
          ></circle>
          <circle fill="#d3d3d3" cx="89.3477893" cy="1.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="97.3477893" cy="16.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="89.3477893" cy="67.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="33.3477893" cy="88.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="33.3477893" cy="134.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="33.3477893" cy="112.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="44.3477893" cy="151.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="70.3477893" cy="24.5" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="23.3239779"
            cy="93.3615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="69.3239779"
            cy="65.3615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="62.3239779"
            cy="50.3615187"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="84.3239779"
            cy="26.3615187"
            r="2.5"
          ></circle>
        </Constellation>
        <Constellation
          isDark={isDark}
          id="greater-bear"
          transform="translate(362.000000, 178.000000)"
        >
          <text x="80" y="80">
            the greater bear
          </text>
          <path
            stroke="#979797"
            d="M3.57866077 146.975925 10.3542091 124.539986 23.1708765 115.859064 37.934339 104.439565 52.3489079 67.9443233 69.7951881 29.6424815 86.532529 2.54984695 81.3389509 46.4228367 112.699329 50.3788034 140.094217 39.8681957 136.194498 33.6439131"
          ></path>
          <path
            stroke="#979797"
            d="M69.7154172 30.7521622 80.9820007 46.615341 67.8579002 82.9382939 51.9356223 69.1961155"
          ></path>
          <path
            stroke="#979797"
            d="M38.156507 104.809059 54.219966 109.243952 69.826228 123.916941 117.281971 156.941837 120.883731 162.069503"
          ></path>
          <path
            stroke="#979797"
            d="M69.6669888 123.013218 95.4325473 119.015822 127.676843 102.598589 126.676843 97.1132853"
          ></path>
          <path
            d="M68.1558581,83.1599155 L54.5203864,108.399328"
            stroke="#979797"
          ></path>
          <circle fill="#d3d3d3" cx="3.5" cy="147.5" r="3.5"></circle>
          <circle fill="#d3d3d3" cx="22.5" cy="116.5" r="3.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="51.9147713"
            cy="68.7269037"
            r="3.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="67.6554602"
            cy="82.8698725"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="127.355711" cy="102.5" r="2.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="117.595066"
            cy="156.861519"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="10.5" cy="124.5" r="2.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="120.595066"
            cy="161.861519"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="69.6554602" cy="123.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="95.7419558" cy="118.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="126.855711" cy="96.5" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="119.095066"
            cy="35.5009967"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="139.823978"
            cy="39.6052521"
            r="1.5"
          ></circle>
          <circle fill="#d3d3d3" cx="38.1301541" cy="104.5" r="1.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="81.3809225"
            cy="46.0684386"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="69.6554602"
            cy="30.5009967"
            r="1.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="112.595066"
            cy="50.0684386"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="53.9147713" cy="108.5" r="2.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="136.323978"
            cy="34.5009967"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="86.3809225"
            cy="3.08641394"
            r="2.5"
          ></circle>
        </Constellation>
        <Constellation isDark={isDark} id="virgo" transform="translate(336.000000, 440.000000)">
          <text x="50" y="20">
            the maiden
          </text>
          <path
            stroke="#979797"
            d="M6.37101909 82.1860913 32.7078464 82.1860913 85.9533613 98.3434911 124.007077 52.2446686 145.22841 42.9089695 172.810518 24.1235118 170.110587 2.58812441 148.540825 2.58812441 124.007077 50.4658077 105.545048 34.7232411 93.6453524 7.91142594"
          ></path>
          <path
            stroke="#979797"
            d="M2.34924681 52.3931023 44.0981804 52.3931023 33.7078208 81.1095563"
          ></path>
          <path
            stroke="#979797"
            d="M44.5387942 51.5196871 71.7006004 57.3304762 85.8799257 97.2169573"
          ></path>
          <path
            d="M71.7630988,57.3429758 L104.99975,34.2216914"
            stroke="#979797"
          ></path>
          <circle fill="#d3d3d3" cx="85.8239779" cy="98.5" r="3.5"></circle>
          <circle
            fill="#d3d3d3"
            cx="3.04776684"
            cy="52.7905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="93.6554602"
            cy="8.29056122"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="105.65546"
            cy="35.2905612"
            r="2.5"
          ></circle>
          <circle
            fill="#d3d3d3"
            cx="123.65546"
            cy="52.2905612"
            r="2.5"
          ></circle>
          <circle fill="#d3d3d3" cx="170.347789" cy="2.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="148.347789" cy="1.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="145.347789" cy="43.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="172.347789" cy="24.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="71.3477893" cy="57.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="33.3477893" cy="82.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="44.3477893" cy="52.5" r="1.5"></circle>
          <circle fill="#d3d3d3" cx="6.34778934" cy="82.5" r="1.5"></circle>
        </Constellation>
      </g>
    </StarWrapper>
  );
}
