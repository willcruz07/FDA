import React from 'react';
import { CheckBox } from '../../components/CheckBox';
import { Input } from '../../components/Input';
import { TitleSection } from '../../components/TitleSection';
import { useAppContext } from '../../hook/AppContext';
import { orderSuccess } from '../../store/order/actions';

export const Customer = () => {
    const { state, dispatch } = useAppContext();

    const [indicou, setIndicou] = React.useState(false);
    const [menor, setMenor] = React.useState(false);   

    return (       
        <>
            <TitleSection title="Dados do cliente"/>                           
            <Input title="Nome" onChangeText={(text) => 
                dispatch(orderSuccess({
                    ...state.order.data, 
                    customer: {
                        ...state.order.data.customer,
                        name: text,
                    } 
                }))}/>
            <Input title="CPF" onChangeText={(text) => 
                dispatch(orderSuccess({
                    ...state.order.data, 
                    customer: {
                        ...state.order.data.customer,
                        CPF: text,
                    } 
                }))}
            />
            <Input title="Endereço" onChangeText={(text) => 
                dispatch(orderSuccess({
                    ...state.order.data, 
                    customer: {
                        ...state.order.data.customer,
                        address: text,
                    } 
                }))}            
            />
            <Input title="Nascimento" />

            <Input title="Celular"
                onChangeText={(text) => 
                    dispatch(orderSuccess({
                        ...state.order.data, 
                        customer: {
                            ...state.order.data.customer,
                            CPF: text,
                        } 
                    }))}
            />            

            <CheckBox title="Alguém indicou?" onCheck={() => {
                    setIndicou(!indicou);
                    dispatch(orderSuccess({
                        ...state.order.data, 
                        customer: {
                            ...state.order.data.customer,
                            indication: !indicou,
                        }  
                    }))
                }} 
            value={indicou} />

            {indicou && (  
                <>              
                    <Input title="Nome do indicador" 
                        onChangeText={(text) => 
                            dispatch(orderSuccess({
                                ...state.order.data, 
                                customer: {
                                    ...state.order.data.customer,
                                    indicatorFriend: {
                                        ...state.order.data.customer.indicatorFriend,
                                        name: text,                                    
                                    },
                                } 
                            }))}
                    />      
                    
                    <Input title="Celular do indicador" 
                        onChangeText={(text) => 
                            dispatch(orderSuccess({
                                ...state.order.data, 
                                customer: {
                                    ...state.order.data.customer,
                                    indicatorFriend: {
                                        ...state.order.data.customer.indicatorFriend,
                                        phone: text,                                    
                                    },
                                } 
                            }))}
                    />   
                </>
            )}
            <CheckBox 
                title="É menor de idade?" 
                onCheck={() => {
                    setMenor(!menor);
                    dispatch(orderSuccess({
                        ...state.order.data, 
                        customer: {
                            ...state.order.data.customer,
                            minor: !menor,
                        }  
                    }))
                }} value={menor} />
            {menor && (
                <>
                    <Input 
                        title="Nome do responsável"
                        onChangeText={(text) => 
                            dispatch(orderSuccess({
                                ...state.order.data, 
                                customer: {
                                    ...state.order.data.customer,
                                    responsible: {
                                        ...state.order.data.customer.indicatorFriend,
                                        name: text,                                    
                                    },
                                } 
                            }))}
                    /> 
                    <Input 
                        title="CPF do responsável"
                        onChangeText={(text) => 
                            dispatch(orderSuccess({
                                ...state.order.data, 
                                customer: {
                                    ...state.order.data.customer,
                                    responsible: {
                                        ...state.order.data.customer.indicatorFriend,
                                        CPF: text,                                    
                                    },
                                } 
                            }))}
                    /> 
                    <Input 
                        title="Celular do responsável"
                        onChangeText={(text) => 
                            dispatch(orderSuccess({
                                ...state.order.data, 
                                customer: {
                                    ...state.order.data.customer,
                                    responsible: {
                                        ...state.order.data.customer.indicatorFriend,
                                        phone: text,                                    
                                    },
                                } 
                            }))}
                    />  
                </>
            )}            
        </>
    )
}

