<template>
  <div id="app">
   <keep-alive>
    <router-view :title="title"></router-view>
   </keep-alive>
   <!-- <Tabbar v-show="showHome"></Tabbar> -->
<!--     <ul>
      <li is="Notice" v-for="(todo,index) in todos" v-bind:title="todo" v-bind:index="index"></li>
    </ul> -->
    <!-- <Notice></Notice> -->
  </div>
</template>

<script>
import Tabbar from './components/tabbar.vue'
import { mapState } from 'vuex'
// import Notice from './component/notice.vue'
// import Bus from './common/bus.js'

export default {
  beforeCreate(){
     console.log(typeof sessionStorage.showHome)
     console.log(window.sessionStorage)
     var bl = eval(sessionStorage.showHome)
     console.log(bl);
     this.$store.commit('SET_HOME',bl===undefined?true:bl)

    //  设置年份显示
    if(sessionStorage.yearIsActive){
      var bl2 = eval(sessionStorage.yearIsActive)
      this.$store.commit('SET_YEAR_ACTIVE',bl2);
    }
   

    // 设置年份
    if(sessionStorage.year){
      var year = sessionStorage.year;
      this.$store.commit('SET_YEAR',year);
    }


    // 设置容器选择状态
    if(sessionStorage.selected){
       var selected = sessionStorage.selected.length>2?'':sessionStorage.selected;
       this.$store.commit('SET_INDEX_STA',selected);
    }

    // 将用户的的session数据重新注入到store中
    if(sessionStorage.serverSession){
        var session = sessionStorage.serverSession;
        this.$store.commit('SET_U_SESSION',session);
    }

    // 获得当前用户id
    if(sessionStorage.userId){
        var uId = sessionStorage.userId;
        this.$store.commit('SET_COMMENTS_UID',uId);
    }
    console.log(this.$store)
     
  },
  name: 'app',
  computed:{
    ...mapState({
       showHome:state => state.showHome,
       userId: state => state.userId,
       session: state => state.u_session,
       path:state => state.path,
       prePath:state => state.prevPath,
       selected: state => state.index_state,
    })
  },
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navs:[{name:'Foo',path:'/foo'},{name:'Bar',path:'/bar'},{name:'Toast',path:'/toast'}],
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Mow the lawn'
      ],
      title:'',
      historySel:'',
    }
  },
  components:{Tabbar},
  methods:{
      goRoute:function(item){
          console.log(item);
          // this.showHome = !this.showHome;
          // sessionStorage.showHome = this.showHome;
          this.$router.push({ path: item.path });
      }
  },
  mounted(){

      let vm = this;
      window.addEventListener("popstate", function(e) { 
          // alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能 
        
          if(window.location.hash.substr(1) =='/home/pageNav' && vm.$route.matched[1] && vm.$route.matched[0].path == '/home'){
             
            vm.$store.commit('SET_INDEX_STA','');

          }else if(window.location.hash.substr(1) == '/home' && vm.$route.matched[0].path == '/home'){
  
             console.log(vm.selected);
             if(!vm.selected){
                vm.$store.commit('SET_INDEX_STA','全部');
                vm.$children[0].$refs.alllist.loadMore();
             }
            
            // console.log(vm.selected);
            
          }
      }, false);


    

 
  }
}
</script>

<style>
*{
   box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  /* margin-top: 60px; */
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
