import React, {useState, useEffect} from 'react';
import xml2js from 'xml2js'

const Parser= ({orders})=>{
    
    const [mkxml, setMkxml] = useState('');

    const onParsing= () =>{
        var jsonparse = JSON.parse(JSON.stringify(orders));
        console.log("object : "+ jsonparse);
        console.log('Parser start -----------------------');
        let builder = new xml2js.Builder({
            xmldec:{ 'version': '1.0', 'encoding': 'UTF-8' },
            headless: true,
            rootName :'biznaruOrderInfoRequest'
        });
        const prettifyXml = require('prettify-xml')

        var orders_xml = builder.buildObject(orders);
        orders_xml= orders_xml.replace(/orders/gi, 'insertBiznaruOrderInfo');
        console.log("orders_xml : "+ orders_xml);

        // let xml = '';
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
        xml += orders_xml;
        
        xml+=`\n</biznaruOrderInfoRequest>
            </gpna:insertBiznaruOrderInfo>
        </soap:Body>
    </soapenv:Envelope>`
        const options = {indent: 2, newline: '\n'}
        var formattedXml = prettifyXml(xml, options);
        console.log(formattedXml);
        setMkxml(formattedXml);
    }

    return{
        onParsing,
        mkxml
    }
    
    // let makeSoap= (orders_xml)=>{
    
    //     let xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    //         <soap:Header xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    //             <ns2:BITHeader xmlns:ns3="http://www.kt.com/bit/oss/GPNA_LVSP_OSB0001" xmlns:ns2="http://www.kt.com/bit/standard/header/v1">
    //                 <ns2:InterfaceID>GPNA_LVSP_OSB0001</ns2:InterfaceID>
    //                 <ns2:SourceSys>GPNA</ns2:SourceSys>
    //                 <ns2:TargetSys>LVSP</ns2:TargetSys>
    //                 <ns2:GUID>GPNA_2020052617481125_LVSPWS0001</ns2:GUID>
    //                 <ns2:SeqNumber>1</ns2:SeqNumber>
    //             </ns2:BITHeader>
    //         </soap:Header>
    //         <soap:Body xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    //             <gpna:insertBiznaruOrderInfo xmlns:gpna="http://www.kt.com/bit/oss/GPNA_LVSP_OSB0001">
    //                 <biznaruOrderInfoRequest>`
    //         xml += orders_xml;
            
    //         xml+=`\n</biznaruOrderInfoRequest>
    //             </gpna:insertBiznaruOrderInfo>
    //         </soap:Body>
    //     </soapenv:Envelope>`
        
    //     xml = formatter(xml);
        
    
    // }
}


export default Parser