# Errander

## 🌟서비스소개
<p align="center"><img src = "https://user-images.githubusercontent.com/78716842/152673542-9b6d9868-7edf-439b-b87e-918f375e04a8.png" width = "250"></p> 
🛵 아주대학교 기숙사 사생들을 위한 배달 대행 서비스. 

<br/>
<br/>
<br/>
✨ 아주대학교 기숙사를 이용하는 학생들은 오후 9시에 기숙사 매점이 문을 닫기 때문에, 필요한 것이 있으면 학교 밖을 나가, 편의점으로 향해야 한다.    
<br/>
✨ 물론, 기타 타 배달 서비스를 이용할 수 있지만, 배달비가 너무 비싸고, 사소한 잡화의 경우에는 배달이 되지 않는다.    
<br/>
✨ 요청자는 최소주문금액에 구애받지 않고 사소한 잡화까지 배달받을 수 있고,배달자는 효율적인 시간활용을 통해 부수적인 수익을 얻을 수 있는 서비스를 제공하려고 한다.    
<br/>
✨ Errander 서비스를 이용함으로써 요청자는 다른 서비스보다 저렴한 배달비로, 다양한 품목에 대해 배달서비스를 이용할 수 있고,     
<br/>
✨ 배달자는 자신이 원하는 시간에 원하는 배달을 골라 수행하고 그에따른 보상으로 부수적인 수익을 얻을 수 있다.     
<br/>
✨ 서비스 이용자는 역할을 구분하지 않고 누구든 요청자가 될 수도, 배달자가 될 수도 있도록 함으로써 많은 사람이 제약없이 이용할 수 있다.     
<br/>


<br/>
<br/>
<p align = "center">
     🛠 Tech 🛠
</p>
    

<p align = "center">
    <img src="https://img.shields.io/badge/React-v17.0.2-blue?logo=React"/></a>
    <img src="https://img.shields.io/badge/ReactRouter-v6.2.1-blue?logo=React-Router&logoColor=blue"/></a>
    <img src="https://img.shields.io/badge/TypeScript-v4.5.5-white?logo=TypeScript&logoColor=skyblue"/></a>
    <img src="https://img.shields.io/badge/Recoil-v0.6.1-blueviolet?&logoColor=blueviolet"/></a>
     <img src="https://img.shields.io/badge/nodeSass-v7.0.1-pink?logo=Sass&logoColor=pink"/></a>
</p>

## 🌟주요기능
Errander의 모든 페이지는 미디어 쿼리를 이용한 반응형으로 제작되어 있습니다.

### 😊 메인화면
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/152673914-7821256e-c0e5-439e-96c1-5d993e72d67b.png" width = "750" height = "450">          <img src = "https://user-images.githubusercontent.com/78716842/152673832-e21b6f85-33c6-4ecc-848a-a80778b89bc2.png" width = "250"></p>  
<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/152673939-4435131f-b61b-4c03-8425-d2bd0f85eaba.png" width = "750" height = "450">          <img src = "https://user-images.githubusercontent.com/78716842/152673954-f772ddd2-420b-4b72-a4a1-d124a2e25f32.png" width = "250"></p>  

* 메인화면은 사용자가 로그인 했을 때와, 로그인 하지 않았을 때를 나누어 나타냅니다
* 로그인 상태 여부는 Recoil의 atom Component에 유저의 정보가 있는지를 기준으로 판단하게 됩니다.
* 현재는 백엔드 서버가 구성되어 있지 않아, atom Component를 이용해 dummy data를 넣어주는 방식이지만, Backend서버가 존재한다면, Recoil의 Selector를 이용한 비동기 쿼리로, 서버로 부터 사용자의 정보를 받아와 반환해주는 방식을 사용할 예정입니다.

```javascript
//login
const setUserNickname = useSetRecoilState(userNickNameInfo);
const onSubmit = useCallback((e)=>{
        //로그인 정보를 포함한 비동기 요청
        e.preventDefault();
        console.log(id);
        console.log(pwd);
        setUserNickname("병준");
},[id,pwd,setUserNickname]);
    
//main page
const userNickName = useRecoilValue(userNickNameInfo);

//Recoil
export const userNickNameInfo = atom<string>({
    key : 'userNickNameInfo',
    default : '',    
})
```

### ✍️ 배달 대행 신청하기
<p align="center"><img src = "https://user-images.githubusercontent.com/78716842/152674128-6b7bca9a-c10e-4e29-b1a0-5dddf99ba68c.png" width = "700"></p>
<p align="center"><img src = "https://user-images.githubusercontent.com/78716842/152674161-3cfcd51b-9410-460e-b112-6fce8d1813f8.png" width = "700"></p>

* 사용자는 총 2단계를 통해, 배달을 신청할 수 있습니다.  
* 첫번째 단계에서 사용자는 주문서에 필요한 기본적인 정보를 작성하게 됩니다.(분류, 상세품목, 배달비, 기타 요청사항)  
* 두번째 단계에서 사용자는 지도와 지도안에 존재하는 marker를 통해 픽업받을 장소를 선택할 수 있습니다.  
* 이때, 마커의 기본위치는 사용자의 현재 위치가 됩니다. 이를 위해, geolocation api를 이용한 custom Hook을 만들어 사용했습니다.

```javascript
type Location = {latitude : string; longitude : string};

const useCurrentLocation = (options = {}) => {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState('');
    const handleSuccess = (pos : any) => {
        const { latitude , longitude } : {latitude : string, longitude : string}  = pos.coords;
        setLocation({
          latitude,
          longitude,
        });
      };
    
      const handleError = (error : any) => {
        setError(error.message);
      };
    
      useEffect(() => {
        const { geolocation } = navigator;

        if (!geolocation) {
          setError("Geolocation is not supported.");
          return;
        }
    
        geolocation.getCurrentPosition(handleSuccess, handleError, options);
      }, [options]);
      
      return { location, error };
};

export default useCurrentLocation;
```

* 지도의 경우에는, 카카오 맵 api를 사용했습니다.
* 화면이 랜더뒤면, useEffect hook을 이용해, useCurrentLocation hook을 통해 가져온 사용자의 위치를 기준으로 지도를 그려주게 됩니다.

```javascript
const {location : currentLocation, error : currentError} = useCurrentLocation(geolocationOptions);
    useEffect(()=>{
        if(currentLocation){
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
                level: 3
              };
            var map = new kakao.maps.Map(container, options);
            var markerPosition  = new kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude); 
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
            marker.setDraggable(true);
            kakao.maps.event.addListener(marker, 'dragend', function(){
                const {La ,Ma } = marker.getPosition()
                setPickUpPos({
                    La : La,
                    Ma : Ma,
                });
            })
        }
},[setPickUpPos,currentLocation]);
```
* marker에는 dragend에 대한 eventListner를 추가해, 사용자가 marker를 이용해 픽업 장소의 위치를 변경할 때 마다, 해당 위치의 위도, 경도 값을 state에 저장할 수 있도록 했습니다.


### 📜 전체 배달 목록

* 메인 페이지에서 배달 목록 확인하기를 통해, 배달 목록 확인페이지로 이동하면, 사용자는 현재 Errander에 올라온 배달 목록을 확인할 수 있습니다.

<p align = "center"><img src = "https://user-images.githubusercontent.com/78716842/152674387-ee201476-1388-4552-bc91-86e72fc6087e.png" width = "750" height = "450">          <img src = "https://user-images.githubusercontent.com/78716842/152674431-39569c47-fe63-4f37-aeb3-f4f174531dbf.png" width = "250"></p>  

* 각각의 배달 목록들은 리스트의 형태로 사용자에게 보여지게 되며, 사용자는 해당 내용을 보고 마음에 들거나 자신이 수행할 수 있는 배달을 수락해 배달을 진행할 수 있습니다.
* 각각의 배달에 대한 PickUp 위치 역시 카카오맵 api를 이용해 화면에 랜더되게 되는데, 이때는 marker의 위치는 해당 배달을 등록한 사용자가 설정한 위치가 됩니다.


## 추후 README 추가 예정

