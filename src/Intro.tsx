import React, { useEffect, useState } from 'react';
import { getApplications, getProducts, getTypes, Product } from './API';
import ProductUI from './Product';
import styles from './intro.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Helmet } from 'react-helmet';



interface Type {
    name: string;
    selected: boolean;
}
interface Application {
    name: string;
    selected: boolean;
}


export default function Intro() {
    const [types, setTypes] = useState<Type[]>([]);
    const [applications, setApplications] = useState<Application[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getTypes().then(types => setTypes(types.map(type => ({ name: type, selected: false }))));
        getApplications().then(applications => setApplications(applications.map(application => ({ name: application, selected: false }))));
    }, []);

    

    useEffect(() => {

        console.log(types, applications);
        

        if (!types.length || !applications.length) {
            console.log('returning');
            
            return;
        }

        const selectedApplications = applications.filter(application => application.selected).map(application => application.name);
        const selectedTypes = types.filter(type => type.selected).map(type => type.name);

        console.log(selectedTypes, selectedApplications);
        

        if (selectedTypes.length || selectedApplications.length) {
            getProducts(selectedTypes, selectedApplications).then(products => setProducts(products));
        } else {
            setProducts([]);
        }
    }, [types, applications]);

    function toggleType(type: string): void {
        setTypes(prev => prev.map(item => item.name === type ? { name: type, selected: !item.selected } : item));
    }
    function toggleApplication(application: string): void {
        setApplications(prev => prev.map(item => item.name === application ? { name: application, selected: !item.selected } : item));
    }

    return (
        <>
        <Helmet>
           <title>经典案例</title>
          <meta name="description" content="从业20年解决包装问题/案例" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
            <h2>材料类型</h2>
            <li className = {styles.ul}>
                {types.map(type => <FormControlLabel control ={<Checkbox onChange = {() => toggleType(type.name)}/>} label = {type.name}/>)}
            </li>
            <p>
                *可多选
            </p>
            <h2>行业应用</h2>
            <li className = {styles.ul}>
                {applications.map(application =>  <button key={application.name} className ={styles.button} style={{ backgroundColor: application.selected ? 'orange' : 'yellow' }} onClick={() => toggleApplication(application.name)}> {application.name}</button>)}
            </li>
            <h2>相关结果</h2>
            <li className = {styles.ul}>
                {products.map(product => <ProductUI key={product.id} product={product}></ProductUI>)}
            </li>
        </>
    );
}