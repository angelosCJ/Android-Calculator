import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {

  const [value, setValue] = useState('');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState(null); 

  const handleNumberPress = (num:string) => {
    setValue((prevValue) => prevValue + num);
  };

  const handleOperatorPress = (op:string) : void => {
    setFirstOperand(value);
    setValue('');
    setOperator(op);
  };

  const handleClear = () => {
    setValue('');
    setFirstOperand('');
    setOperator(null);
  };

  const handleNegativePositive = () =>{
    const newNumber =parseFloat(value) * -1;
    setValue(newNumber.toString());
  }

  const handlePercentage = () =>{
    const percentage = parseFloat(value) / 100;
    setValue(percentage.toString());
  }

  const deleteCharacter = () =>{
    if (parseFloat(value) > 0) {
      setValue(value.slice(0,-1));
    }
  }

  const handleCalculate = () => {
    if (firstOperand && operator && value) {
      const num1 = parseFloat(firstOperand);
      const num2 = parseFloat(value);
      let result;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'Error';
          break;
        default:
          return;
      }

      setValue(result.toString());
      setFirstOperand('');
      setOperator(null);
    }
  };


  const window = useWindowDimensions();
  return (
    <View style={[styles.container,{height:window.height,width:window.width,backgroundColor:'rgb(13,18,33)'}]}>
      <StatusBar style="auto" backgroundColor='white'/>
      <TextInput  value={value} style={[styles.input,{height:window.height*0.3,width:window.width}]} />
      <View style={[styles.board,{height:window.height*0.7,width:window.width}]} >

       <View style={[styles.row1,{height:window.height*0.14,width:window.width}]} >

       
        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.ac,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={handleClear}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >AC</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>
        
      
        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.c,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={deleteCharacter} >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >C</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.percent,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={handlePercentage} >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >%</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(245,210,60)', 'rgb(202,120,0)']} style={[styles.plus,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleOperatorPress('+')}  >  
         <View  style={[styles.cover2,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(202,120,0)', 'rgb(245,210,60)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'black',fontSize:40}]} >+</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

       </View>

       <View style={[styles.row2,{height:window.height*0.14,width:window.width}]} >

       <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.seven,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('7')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >7</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.eight,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('8')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >8</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.nine,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('9')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >9</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(245,210,60)', 'rgb(202,120,0)']} style={[styles.minus,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleOperatorPress('-')}  >  
         <View  style={[styles.cover2,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(202,120,0)', 'rgb(245,210,60)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'black',fontSize:40}]} > - </Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

       </View>

       <View style={[styles.row3,{height:window.height*0.14,width:window.width}]} >

       <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.four,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('4')}   >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >4</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>


        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.five,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('5')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >5</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

       
        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.six,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('6')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >6</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>
      

        <LinearGradient   colors={['rgb(245,210,60)', 'rgb(202,120,0)']} style={[styles.multiply,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleOperatorPress('*')}  >  
         <View  style={[styles.cover2,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(202,120,0)', 'rgb(245,210,60)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'black',fontSize:40}]} > x </Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

       </View>

       <View style={[styles.row4,{height:window.height*0.14,width:window.width}]} >

       <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.one,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('1')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >1</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.two,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('2')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >2</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.three,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('3')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >3</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(245,210,60)', 'rgb(202,120,0)']} style={[styles.divide,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleOperatorPress('/')}   >  
         <View  style={[styles.cover2,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(202,120,0)', 'rgb(245,210,60)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'black',fontSize:40}]} > / </Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

       </View>

       <View style={[styles.row5,{height:window.height*0.14,width:window.width}]} >

     
       <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.zero,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('0')}  >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} >0</Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.ps,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={handleNegativePositive} >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} > +/- </Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(102,110,123)', 'rgb(23,40,53)']} style={[styles.dot,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={() => handleNumberPress('.')} >  
         <View  style={[styles.cover,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(23,40,53)', 'rgb(102,110,123)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'white',fontSize:30}]} > . </Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient   colors={['rgb(245,210,60)', 'rgb(202,120,0)']} style={[styles.equals,{height:window.height*0.1,width:window.width*0.2}]} >
        <TouchableOpacity onPress={handleCalculate}  >  
         <View  style={[styles.cover2,{height:window.height*0.085,width:window.width*0.17}]} >
         <LinearGradient   colors={['rgb(202,120,0)', 'rgb(245,210,60)']}  style={[styles.btn,{height:window.height*0.08,width:window.width*0.16}]} >
        <Text style={[{color:'black',fontSize:40}]} > = </Text>
        </LinearGradient>
        </View> 
        </TouchableOpacity>
        </LinearGradient>


       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(13,18,33)',
    flexDirection:'column',
  },
  input:{
    backgroundColor:'rgb(13,18,33)',
    top:25,
    color:'rgb(256,256,256)',
    textAlign:'right',
    fontSize:50,
    fontWeight:'800',
  },
  board:{
    flexDirection:'column',
    backgroundColor:'white',
  },
  row1:{
    backgroundColor:'rgb(13,18,33)',
    justifyContent:'center',
    flexDirection:'row',
    gap:20,
  },
  ac:{
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  btn:{
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },
  cover:{
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2, // Set the border width
    borderColor: 'rgb(102,110,123)',
  },
  cover2:{
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2, // Set the border width
    borderColor: 'rgb(245,210,60)',
  },
  c:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  percent:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  plus:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  row2:{
    backgroundColor:'rgb(13,18,33)',
    justifyContent:'center',
    flexDirection:'row',
    gap:20,
  },
  seven:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  eight:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  nine:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  minus:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  row3:{
    backgroundColor:'rgb(13,18,33)',
    justifyContent:'center',
    flexDirection:'row',
    gap:20,
  },
  four:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  five:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  six:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  multiply:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  row4:{
    backgroundColor:'rgb(13,18,33)',
    justifyContent:'center',
    flexDirection:'row',
    gap:20,
  },
  one:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  two:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  three:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  divide:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  row5:{
    backgroundColor:'rgb(13,18,33)',
    justifyContent:'center',
    flexDirection:'row',
    gap:20,
  },
  zero:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  ps:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  dot:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
  equals:{
    backgroundColor:'black',
    borderRadius:20,
    top:15,
    justifyContent:'center',
    alignItems:'center',
  },
});
