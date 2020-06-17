import React, {useState, useEffect} from 'react';
import xml2js from 'xml2js'
import moment from 'moment'


const Parser= ({orders})=>{
    
    const [guid, setGuid] = useState('');
    const [mkxml, setMkxml] = useState('');

    useEffect(()=>{
        setGuid(makeGuid())
        console.log("useEffect !!");
    }); // guid 가 시간마다 업데이트 되어야하기 때문에 [] 제거

    const onParsing= () =>{
        console.log("onParsing !!");
        // var jsonparse = JSON.parse(JSON.stringify(orders));
        // console.log("object : "+ jsonparse);
        const prettifyXml = require('prettify-xml');

        let builder = new xml2js.Builder({
            xmldec:{ 'version': '1.0', 'encoding': 'UTF-8' },
            headless: true,
            rootName :'biznaruOrderInfoRequest'
        });
        var orders_xml = builder.buildObject(orders);

        let xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Header xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <ns2:BITHeader xmlns:ns3="http://www.kt.com/bit/oss/GPNA_LVSP_OSB0001" xmlns:ns2="http://www.kt.com/bit/standard/header/v1">
                <ns2:InterfaceID>GPNA_LVSP_OSB0001</ns2:InterfaceID>
                <ns2:SourceSys>GPNA</ns2:SourceSys>
                <ns2:TargetSys>LVSP</ns2:TargetSys>
                <ns2:GUID>`
        xml += guid;
        xml+= `</ns2:GUID>
                <ns2:SeqNumber>1</ns2:SeqNumber>
            </ns2:BITHeader>
        </soap:Header>
        <soap:Body xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <gpna:insertBiznaruOrderInfo xmlns:gpna="http://www.kt.com/bit/oss/GPNA_LVSP_OSB0001">`
        xml += orders_xml;
        
        xml+=`\n</gpna:insertBiznaruOrderInfo>
        </soap:Body>
    </soapenv:Envelope>`
        const options = {indent: 2, newline: '\n'}
        let formattedXml = prettifyXml(xml, options);
        // formattedXml = formattedXml.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        // formattedXml = formattedXml.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        setMkxml(formattedXml);
    }

    const makeGuid = ()=>{
        // moment() 현재시간 출력
        console.log("makeGuid !!");
        let formatdate = 'GPNA_';
        formatdate += moment().format("YYYYMMDDHHmmssSS");
        formatdate += '_LVSPWS0001';
         return formatdate;
    }
    
    return{
        onParsing,
        mkxml
    }

}



export default Parser