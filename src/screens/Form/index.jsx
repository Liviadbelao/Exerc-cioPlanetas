import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { ColorPicker } from "react-native-color-picker";

import Slider from "@react-native-community/slider";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import Title from "../../components/Title";

import listaPlanetas from "../../models/Planeta/Planetas";
import Planeta from "../../models/Planeta/Planeta";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const image = "../../../assets/download (3).jpg";
export default function Form({ route }) {
  /* navegação */
  let { planeta, edit } = route.params;
  /* inputs normais */
  const [nome, setNome] = useState("");
  const [natureza, setNatureza] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [humanos, setHumanos] = useState("")
  const [galaxia, setGalaxia] = useState("");
  const [sisSolar, setSisSolar] = useState("");
  const [coordenadas, setCoordenadas] = useState("");
  const [governante, setGovernante] = useState("");
  const [titulo, setTitulo] = useState("");

  const [isUpdate, setIsUpdate] = useState(edit);
  /* input data */
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  /* color input */
  const [corPrimaria, setCorPrimaria] = useState("#000000");
  const [corSecundaria, setCorSecundaria] = useState("#000000");
  /* navegação */
  const navigation = useNavigation();
  /* mensagens */
  const [msgErro, setMsgErro] = useState(false);
  const [msg, setMsg] = useState(false);
  const [msgData, setMsgData] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  useEffect(() => {

    if (edit) {
      setNome(planeta.nome);
      setNatureza(planeta.natureza);
      setDate(new Date());
      setPopulacao(planeta.populacao);
      setPopulacao(planeta.humanos);
      setGalaxia(planeta.galaxia);
      setSisSolar(planeta.sisSolar);
      setCoordenadas(planeta.coordenadas);
      setGovernante(planeta.governante);
      setTitulo(planeta.titulo);
      setCorSecundaria(planeta.corSecundaria);
      setCorPrimaria(planeta.corPrimaria);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [planeta, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      listaPlanetas.update(
        planeta.id,
        nome,
        natureza,
        date,
        populacao,
        humanos,
        galaxia,
        sisSolar,
        coordenadas,
        governante,
        titulo,
        corPrimaria,
        corSecundaria
      );
      clearInputs();
    } else {
      if (
        nome == "" ||
        natureza == "" ||
        populacao == "" ||
        humanos == "" ||
        galaxia == "" ||
        sisSolar == "" ||
        coordenadas == "" ||
        governante == "" ||
        titulo == "" ||
        corPrimaria == "#000000" ||
        corSecundaria == "#000000"
      ) {
        setMsgErro(true);
      } else if (parseInt(populacao) < 0 || parseInt(humanos) < 0) {
        setMsg(true)
      } else if (date > new Date()) {
        setMsgData(true)
      } else {
        setMsgErro(false);
        setMsg(false)
        setMsgData(false)
        const newPlaneta = new Planeta(
          nome,
          natureza,
          date,
          populacao,
          humanos,
          galaxia,
          sisSolar,
          coordenadas,
          governante,
          titulo,
          corPrimaria,
          corSecundaria
        ); // Criando novo planeta com os dados corretos
        listaPlanetas.addPlaneta(newPlaneta);
        clearInputs();
        navigation.navigate("ListaPlanetas");
      }
    }
  };

  // Função de conversão de HSV para RGB para conseguir deixar a cor do icon certa
  function hsvToRgb(h, s, v) {
    let r, g, b, i, f, p, q, t;
    if (s === 0) {
      r = g = b = v;
      return [r, g, b];
    }
    h /= 60;
    i = Math.floor(h);
    f = h - i;
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
    switch (i) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      default:
        r = v;
        g = p;
        b = q;
    }
    return [r * 255, g * 255, b * 255];
  }

  //Transformando o valor da cor primária de RGB para Hexadecimal para poder usar
  const onColorChangePrimaryColor = (color) => {
    const [r, g, b] = hsvToRgb(color.h, color.s, color.v);

    const hexColor = `#${Math.round(r)
      .toString(16)
      .padStart(2, "0")}${Math.round(g)
        .toString(16)
        .padStart(2, "0")}${Math.round(b).toString(16).padStart(2, "0")}`;

    setCorPrimaria(hexColor);
  };

  //Transformando o valor da cor secundária de RGB para Hexadecimal para poder usar
  const onColorChangeSecundColor = (color) => {
    const [r, g, b] = hsvToRgb(color.h, color.s, color.v);

    const hexColor = `#${Math.round(r)
      .toString(16)
      .padStart(2, "0")}${Math.round(g)
        .toString(16)
        .padStart(2, "0")}${Math.round(b).toString(16).padStart(2, "0")}`;

    setCorSecundaria(hexColor);
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setNome("");
    setNatureza("");
    setDate("");
    setCoordenadas("");
    setGalaxia("");
    setGovernante("");
    setTitulo("");
    setHumanos("")
    setSisSolar("");
    setPopulacao("");

  };

  return (
    <ScrollView style={styles.view}>
      <View style={styles.container}>
        <Title title={isUpdate ? "Editar Planeta" : "Novo Planeta"} />
        <View style={styles.inputBox}>
          <Text style={styles.text1}>Informações do planeta:</Text>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="brightness-1"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do Planeta"
              onChangeText={setNome}
              value={nome}
              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="pine-tree"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite os recursos naturais do planeta"
              onChangeText={setNatureza}
              value={natureza}
              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="account-multiple-plus"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite a quantidade de população"
              onChangeText={setPopulacao}
              value={populacao}
              keyboardType="numeric"
              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="account-multiple-plus"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite a quantidade de humanos"
              onChangeText={setHumanos}
              value={humanos}
              keyboardType="numeric"
              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <Text style={styles.text}>Localização planeta:</Text>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="star-circle-outline"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite a galxia"
              onChangeText={setGalaxia}
              value={galaxia}

              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="white-balance-sunny"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite o sistema solar"
              onChangeText={setSisSolar}
              value={sisSolar}
              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="code-equal"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite as coordenadas"
              onChangeText={setCoordenadas}
              value={coordenadas}
              maxLength={9}
              keyboardType="numeric"
              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <Text style={styles.text}>Governo:</Text>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="crown"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do governante"
              onChangeText={setGovernante}
              value={governante}
              placeholderTextColor={'#D3D3D3'}
            />
          </View>
          <View style={styles.box}>
            <Icon style={styles.iconStyle} name="account"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Digite o titulo"
              placeholderTextColor={'#D3D3D3'}
              onChangeText={setTitulo}
              value={titulo}
            />
          </View>
          <TouchableOpacity style={styles.data} onPress={showDatepicker}>
            <Text style={styles.text}>Escolha a data</Text>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date || new Date()}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          <View style={styles.boxColor}>
            <ColorPicker
              onColorChange={onColorChangePrimaryColor}
              sliderComponent={Slider}
              style={styles.cor}
            />

            <ColorPicker
              onColorChange={onColorChangeSecundColor}
              sliderComponent={Slider}
              style={styles.cor}
            />
          </View>
        </View>
        {msgErro ? <Text style={styles.erro}>Preencha todos os campos, incluindo os de cores.</Text> : <Text></Text>}
        {msg ? <Text style={styles.erro}>População nem a população humana podem ser menor que 0</Text> : <Text></Text>}
        {msgData ? <Text style={styles.erro}>A data não pode ser maior que o dia de hoje.</Text> : <Text></Text>}
        <TouchableOpacity style={styles.button} onPress={handleUserAction}>
          <Text>{isUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
        </TouchableOpacity>


        {isUpdate && (
          <TouchableOpacity onPress={clearInputs}>
            <Text>Cancelar Edição</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}
