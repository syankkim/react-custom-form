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
        let builder = new xml2js.Builder({
            xmldec:{ 'version': '1.0', 'encoding': 'UTF-8' },
            cdata:true
        });
        let xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Header xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <ns2:BITHeader xmlns:ns3="http://www.kt.com/bit/oss/GPNA_LVSP_OSB0001" xmlns:ns2="http://www.kt.com/bit/standard/header/v1">
                <ns2:InterfaceID>GPNA_LVSP_OSB0001</ns2:InterfaceID>
                <ns2:SourceSys>GPNA</ns2:SourceSys>
                <ns2:TargetSys>LVSP</ns2:TargetSys>
                <ns2:GUID>GPNA_2020052617481125_LVSPWS0001</ns2:GUID>
                <ns2:SeqNumber>1</ns2:SeqNumber>
            </ns2:BITHeader>
        </soap:Header>
        <soap:Body xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <gpna:insertBiznaruOrderInfo xmlns:gpna="http://www.kt.com/bit/oss/GPNA_LVSP_OSB0001">
                <biznaruOrderInfoRequest>`
        xml += builder.buildObject(objects);
        
        xml= xml.replace(/orders/gi, 'insertBiznaruOrderInfo');
        
        xml+=`\n</biznaruOrderInfoRequest>
        </gpna:insertBiznaruOrderInfo>
    </soap:Body>
</soapenv:Envelope>`

        setMkxml(xml);
        xml='';
    }

    return{
        onParsing,
        mkxml
    }
    
}

export default Parser