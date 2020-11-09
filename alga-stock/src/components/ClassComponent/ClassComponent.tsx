import React from 'react';

class ClassComponent extends React.Component<{name: string}> {

    constructor(props:any){
        super(props);
        console.log('Chamando o Construtor');
    }

    state = {
        name: 'Mundo'
    }
    
    render(){
        console.log('Chamando o Render');
        return <div>
            <p>name: {this.state.name}</p>
            <button onClick={()=>{
                this.setState({name: 'Roberto'})    
            }}>Click me</button>
        </div>
    }

    componentDidMount(){
        console.log('Chamando o componentDidMount para Criação do Componente');
    }

    componentDidUpdate(){
        console.log('Chamando o componentDidUpdate para atualização do Componente');
    }

    componentWillMount(){
        console.log('Chamando o componentWillMount antes de destruir os componentes');
    }

}

export default ClassComponent