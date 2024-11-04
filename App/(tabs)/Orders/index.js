import React, { useState } from 'react'
import { 
    View, 
    Text, 
    FlatList,
    TouchableOpacity
} from 'react-native'
import styles from '../../styles';
import Button from "../../components/Button/index"


const DATA = [
  {
    id: '1',
    title: 'Matkap',
    adet: 0,
  },
  {
    id: '2',
    title: 'Matkap Ucu',
    adet: 0,
  },
  {
    id: '3',
    title: 'Çekiç',
    adet: 0,
  },
  {
    id: '4',
    title: 'Testere',
    adet: 0,
  },
  {
    id: '5',
    title: 'Çivi',
    adet: 0,
  },
  {
    id: '6',
    title: 'Vida',
    adet: 0,
  },
  {
    id: '7',
    title: 'Dübel',
    adet: 0,
  },
  {
    id: '8',
    title: 'Şerit Metre',
    adet: 0,
  },
  {
    id: '9',
    title: 'Su Terazisi',
    adet: 0,
  },
  {
    id: '10',
    title: 'İskele Malzemeleri',
    adet: 0,
  },
  {
    id: '11',
    title: 'Koruyucu Eldiven',
    adet: 0,
  },
  {
    id: '12',
    title: 'Koruyucu Gözlük',
    adet: 0,
  },
  {
    id: '13',
    title: 'Baret',
    adet: 0,
  },
  {
    id: '14',
    title: 'Güvenlik Ayakkabısı',
    adet: 0,
  },
  {
    id: '15',
    title: 'Yelek',
    adet: 0,
  },
  {
    id: '16',
    title: 'Elektrik Kablosu',
    adet: 0,
  },
  {
    id: '17',
    title: 'Kablo Kanalı',
    adet: 0,
  },
  {
    id: '18',
    title: 'Boru',
    adet: 0,
  },
  {
    id: '19',
    title: 'Boru Anahtarı',
    adet: 0,
  },
  {
    id: '20',
    title: 'Cıvata ve Somun Seti',
    adet: 0,
  },
  {
    id: '21',
    title: 'Kalaycı Sıcak Havya',
    adet: 0,
  },
  {
    id: '22',
    title: 'Pense',
    adet: 0,
  },
  {
    id: '23',
    title: 'İngiliz Anahtarı',
    adet: 0,
  },
  {
    id: '24',
    title: 'Yıldız Tornavida',
    adet: 0,
  },
  {
    id: '25',
    title: 'Düz Tornavida',
    adet: 0,
  },
  {
    id: '26',
    title: 'Kablo Bağı',
    adet: 0,
  },
  {
    id: '27',
    title: 'Kompresör',
    adet: 0,
  },
  {
    id: '28',
    title: 'Merdiven',
    adet: 0,
  },
  {
    id: '29',
    title: 'Taşıma Arabası',
    adet: 0,
  },
  {
    id: '30',
    title: 'Beton Mikseri',
    adet: 0,
  },
  {
    id: '31',
    title: 'Jeneratör',
    adet: 0,
  },
  {
    id: '32',
    title: 'Kaynak Makinesi',
    adet: 0,
  },
  {
    id: '33',
    title: 'Taşlama Makinesi',
    adet: 0,
  },
  {
    id: '34',
    title: 'Kesme Diski',
    adet: 0,
  },
  {
    id: '35',
    title: 'Su Pompası',
    adet: 0,
  },
  {
    id: '36',
    title: 'El Feneri',
    adet: 0,
  },
  {
    id: '37',
    title: 'Yangın Söndürücü',
    adet: 0,
  },
  {
    id: '38',
    title: 'Temizlik Malzemeleri',
    adet: 0,
  },
  {
    id: '39',
    title: 'İlk Yardım Çantası',
    adet: 0,
  },
  {
    id: '40',
    title: 'Kum Torbaları',
    adet: 0,
  },
  {
    id: '41',
    title: 'Baret Lambası',
    adet: 0,
  },
  {
    id: '42',
    title: 'Takım Çantası',
    adet: 0,
  },
];

const RenderOrders = ({name, count}) => {




  return(
    <View style={styles.orderElement}>
        <Text style={styles.orderElementText} >{name}</Text>
        <View style={styles.addAndRemove} >

          <TouchableOpacity >
            <Text>Ekle</Text>
          </TouchableOpacity>

          <Text>{count}</Text>

          <TouchableOpacity >
            <Text>Sil</Text>
          </TouchableOpacity>          

        </View>
    </View>
  )
}

const OrderPage = () => {
    return(
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <RenderOrders name={item.title} count={item.adet} />}
                keyExtractor={(item) => item.id}
                style={styles.orderList}
                contentContainerStyle={{  width: "100%"}}
            />

          <Button
            text="Sipariş Oluştur"
            onPress={() => {}}
          />

        </View>
    )
}

export default OrderPage