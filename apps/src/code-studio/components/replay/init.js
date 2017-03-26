import React from 'react';
import ReactDOM from 'react-dom';
import ActivityReplay from './ActivityReplay';

const init = function () {
  window.data = [{"-4":2646,"1":271,"2":144,"3":445,"17":484,"20":30,"22":254,"31":5,"100":3642},{"-4":1737,"1":170,"2":69,"3":252,"17":269,"20":32,"22":287,"31":12,"100":5093},{"-4":1135,"1":129,"2":51,"3":133,"17":171,"20":46,"22":323,"31":14,"100":5919},{"-4":844,"1":112,"2":20,"3":96,"17":123,"20":52,"22":340,"31":15,"100":6319},{"-4":694,"1":87,"2":16,"3":69,"17":94,"20":57,"22":340,"31":17,"100":6547},{"-4":574,"1":79,"2":13,"3":50,"17":80,"20":65,"22":340,"31":18,"100":6702},{"-4":513,"1":70,"2":10,"3":41,"17":68,"20":65,"22":349,"31":19,"100":6786},{"-4":464,"1":67,"2":12,"3":39,"17":66,"20":72,"22":342,"31":19,"100":6840},{"-4":435,"1":63,"2":14,"3":37,"17":55,"20":71,"22":344,"31":19,"100":6883},{"-4":406,"1":68,"2":10,"3":34,"17":51,"20":74,"22":347,"31":19,"100":6912},{"-4":387,"1":66,"2":10,"3":31,"17":52,"20":75,"22":347,"31":19,"100":6934},{"-4":378,"1":64,"2":8,"3":30,"17":54,"20":74,"22":348,"31":19,"100":6946},{"-4":377,"1":60,"2":8,"3":25,"17":50,"20":74,"22":351,"31":20,"100":6956},{"-4":369,"1":59,"2":7,"3":27,"17":49,"20":74,"22":350,"31":20,"100":6966},{"-4":364,"1":58,"2":7,"3":26,"17":48,"20":74,"22":350,"31":20,"100":6974},{"-4":358,"1":54,"2":8,"3":27,"17":48,"20":74,"22":350,"31":21,"100":6981},{"-4":351,"1":53,"2":8,"3":28,"17":48,"20":75,"22":349,"31":22,"100":6987},{"-4":345,"1":55,"2":9,"3":26,"17":46,"20":74,"22":350,"31":22,"100":6994},{"-4":345,"1":54,"2":9,"3":25,"17":45,"20":74,"22":350,"31":22,"100":6997},{"-4":344,"1":53,"2":9,"3":23,"17":46,"20":74,"22":350,"31":22,"100":7000},{"-4":341,"1":55,"2":10,"3":23,"17":44,"20":75,"22":350,"31":22,"100":7001},{"-4":333,"1":56,"2":10,"3":25,"17":44,"20":76,"22":350,"31":22,"100":7005},{"-4":335,"1":54,"2":11,"3":23,"17":42,"20":77,"22":351,"31":22,"100":7006},{"-4":333,"1":56,"2":11,"3":23,"17":40,"20":77,"22":351,"31":22,"100":7008},{"-4":333,"1":53,"2":10,"3":24,"17":39,"20":77,"22":351,"31":23,"100":7011},{"-4":327,"1":53,"2":10,"3":23,"17":42,"20":78,"22":351,"31":23,"100":7014},{"-4":327,"1":52,"2":10,"3":23,"17":41,"20":78,"22":351,"31":23,"100":7016},{"-4":327,"1":53,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7017},{"-4":326,"1":52,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7018},{"-4":324,"1":54,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7019},{"-4":324,"1":54,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7019},{"-4":324,"1":54,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7019},{"-4":324,"1":53,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7019},{"-4":324,"1":54,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7019},{"-4":325,"1":53,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7019},{"-4":325,"1":52,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":325,"1":52,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":326,"1":51,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":325,"1":52,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":326,"1":51,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":326,"1":51,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":325,"1":51,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":325,"1":51,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":325,"1":51,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7020},{"-4":324,"1":52,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7021},{"-4":324,"1":52,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7021},{"-4":323,"1":52,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":323,"1":51,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":323,"1":51,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":324,"1":51,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":325,"1":50,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":324,"1":51,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":323,"1":51,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":324,"1":50,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":324,"1":50,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7022},{"-4":322,"1":50,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7024},{"-4":321,"1":50,"2":10,"3":24,"17":39,"20":78,"22":351,"31":23,"100":7025},{"-4":321,"1":50,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7026},{"-4":321,"1":50,"2":10,"3":23,"17":39,"20":78,"22":351,"31":23,"100":7026}];
  ReactDOM.render(
    <ActivityReplay steps={window.data}/>,
    document.querySelector('.main')
  );
};

export default {init};
