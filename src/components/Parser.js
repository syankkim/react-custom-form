import React, {useState, useEffect} from 'react';
import xml2js from 'xml2js'

const Parser= ({orders})=>{
    const [objects, setObjects] = useState({orders});
    const [mkxml, setMkxml] = useState('');

    const onParsing= (e) =>{
        // if(e) e.preventDefault(); //이건 왜 필요?
        const {name, value} = e.target;
        e.persist(); // 이벤트를 저장
        setObjects({...objects, [name]: value});

        console.log('Parser End -----------------------');
        //objects: {custNm: "", orderType: "4201", prodNm: ""}

        let builder = new xml2js.Builder();
        let xml = builder.buildObject(objects);

        setMkxml(xml);
    }

    return{
        onParsing,
        mkxml
    }
    
}

export default Parser