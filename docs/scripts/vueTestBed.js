let vueVM=[];
function convertToTwoDigit(v){
    let ans=Number(v)+1;
    if(ans<10)ans="0"+ans;
    else ans=String(ans);
    return ans;
}
function getFormatedDate(){
    let nowDate=new Date();
    let ans=String(nowDate.getFullYear())+":";
    
    ans=ans+convertToTwoDigit(nowDate.getMonth())+":";
    ans=ans+convertToTwoDigit(nowDate.getDay())+"#";
    ans=ans+convertToTwoDigit(nowDate.getHours())+":";
    ans=ans+convertToTwoDigit(nowDate.getMinutes())+":";
    ans=ans+convertToTwoDigit(nowDate.getHours());
    return ans;
}
window.onload=function(){
    console.log("vueDemo.js loaded!");
    vueVM[0]=new Vue({
      el:"#vue_container_0",
      data:{
        text_1:"TestText",
        imgSrc:"../images/imgTest_1.jpg",
        imgTitle:"img1_A"
      }
    });
    vueVM[1]=new Vue({
        el:"#vue_container_1",
        data:{
            testMessgae_1:"testMessgae_1",
            cardDataSet:[
                {
                    header:"TestText_1",
                    imgData:{
                        imgSrc:"../images/imgTest_1.jpg",
                        imgTitle:"img1"
                    }
                },
                {
                    header:"TestText_2",
                    imgData:{
                        imgSrc:"../images/imgTest_2.jpg",
                        imgTitle:"img2"
                    }
                },
                {
                    header:"TestText_3",
                    imgData:{
                        imgSrc:"../images/imgTest_3.jpg",
                        imgTitle:"img3"
                    }
                }
            ]
        },
        methods:{
            printOut_0:function(){console.log("Proxy Method OK");},// add proxy method to vueVM[1]
            printOut_1:function(){console.log("access Proxy Data : "+this.testMessgae_1);}// access data using this
        }
      });
    vueVM[2]=new Vue({
        el:"#vue_container_2",
        data:{
            clickTime:0,
            isDislpay_img_1:false,
            Btn_2_text:"Show Img",
            div_3_ID:0
        },
        methods:{
            ClickEvent_1:function(){this.clickTime++;},
            ClickEvent_2:function(){
                this.isDislpay_img_1=!this.isDislpay_img_1;
               if(this.Btn_2_text="Show Img"){
                this.Btn_2_text="Hide Img";
               }else{
                 this.Btn_2_text="Show Img";
               }},
            ClickEvent_3:function(){this.div_3_ID=(this.div_3_ID+1)%3;}
        }
      });
    vueVM[3]=new Vue({
        el:"#vue_container_3",
        data:{
            Input_1:"Input 1",
            Input_Lazy:"Input_Lazy",
            Input_Number:"Input_Number",
            textAreaText:"textAreaText",
            radioBtnText:"B",
            
            checkBoxArray:[],
            selectMsg_1:"K",
            selectList_1:[
                {value:"G",
                text:"G"},
                {value:"H",
                text:"H"},
                {value:"K",
                text:"K"}
            ]
        },
        methods:{
            ClickEvent_1:function(){this.clickTime++;},
            ClickEvent_2:function(){
                this.isDislpay_img_1=!this.isDislpay_img_1;
               if(this.Btn_2_text="Show Img"){
                this.Btn_2_text="Hide Img";
               }else{
                 this.Btn_2_text="Show Img";
               }},
            ClickEvent_3:function(){this.div_3_ID=(this.div_3_ID+1)%3;}
        }
      });
    vueVM[4]=new Vue({
        el:"#vue_container_4",
        data:{
            Msg_1:"Msg_1",
            div_1_title:"div_1_title",
            Msg_2:"Msg_2",
            msg_P1:"ABC",
            msg_P2:"EFG"
        },
        filters:{
            passFilter_1:function(input){//note:filters have input
                return input+" Filtered!";
            }
        },
        computed:{//note:computed have not input
            Msg_2Computed:function(){
                return this.Msg_2+" Computed!";
            },
            msg_P1plusP2:{//reflect and proxy,implement bi-direction linking
               get:function(){
                   return this.msg_P1+' '+this.msg_P2;
               },
               set:function(v){// note:have input
                   let data=v.split(' ');//not " "
                   this.msg_P1=data[0];
                   this.msg_P2=data[1];
               }
            },
          
        }
      });
    vueVM[5]=new Vue({
        el:"#vue_container_5",
        data:{
            class_1:"redText",
            class_2:"blueBG",
            isRedText_1:false,
            isblueBG_1:true,
            classObj_1:{
                redText:true,
                blueBG:false,
            },
            styleObject_1:{
              color:'yellow',
              background:'violet'
            },
            textInput_I:{
                msg:"",
                limit:50,
                remain:0,
                classList:[]
            }
        },
        computed:{
            computed_classObj_1:function(){
                 return {
                    blueBG:true,
                    redText:true
                }
            } ,
            textInput_I_computed:{
                get:function(){return this.textInput_I.msg;},
                set:function(v){
                    if(v.length<50){
                        this.textInput_I.msg=v;
                        this.textInput_I.remain=this.textInput_I.limit-v.length;
                        let id=this.textInput_I.classList.indexOf("redBorder");
                         if(id!=-1){
                            this.textInput_I.classList.splice(id,1);
                         }
                    }else{
                        this.textInput_I.remain=0;
                        this.textInput_I.msg=v.substr(0,50);
                        this.textInput_I.classList.push("redBorder");
                    }
                }
            }
        }
    });
    //global component
    Vue.component(
        "comp_1",//component name,using small case to avoid error
       {
        template:"#template_comp_1",
        data:function(){
            return {
                msg_1:"_msg_1",
                msg_2:"_msg_2 "+this.prop_1
            };
        },
        props:["prop_1"],//prop name declare here
        methods:{
           
        }
       }


    );

    vueVM[6]=new Vue({
        el:"#vue_container_6",
        data:{},
        filters:{},
        computed:{},
    });
    vueVM[7]=new Vue({
        el:"#vue_container_7",
        components:{
        comp_1_local:{
            template:"#template_comp_1",
            data:function(){
            return {
                msg_1:"_msg_1_Local",
                msg_2:"_msg_2_Local"
            };
            },
            props:["prop_1"],
            methods:{}
            }
        },
        data:{},
        filters:{},
        computed:{},
    });
    vueVM[8]=new Vue({
        el:"#vue_container_8",
        data:{
          data_prop_1:"data_prop_in_VM_data"

        }
    });
    Vue.component(
        "component_with_input_1",//component name,using small case to avoid error
       {
        template:"#template_component_with_input_1",
        data:function(){
            return {
                msg_in_component_1:"msg_in_component_1_send_In",
                msg_in_component_2:"msg_in_component_2_send_In"
            };
        },
        props:[],//prop name declare here
        methods:{
            sendOut_1:function(){
                this.$emit("reload",this.msg_in_component_1);
            },
            sendOut_2:function(){
                this.$emit("reload",this.msg_in_component_1,this.msg_in_component_2);
            }
        }
       }


    );
    vueVM[9]=new Vue({
        el:"#vue_container_9",
        data:{
          data_prop_2:"data_prop_2_in_VM_data",
          msg_VM_1:"msg_VM_1_OK",
          msg_VM_2:"msg_VM_2_OK",
          msg_VM_3:"msg_VM_3_OK",
          msg_4:"msg_4"
        },
        methods:{//different with computed, not v-model with DOM,must call by event
            receiveData_I:function(v1,v2){
                this.msg_VM_2=v1;
                this.msg_VM_3=v2;
            },
            _alert:()=>{
                alert("click Component");
              }
        }
    });
    Vue.component(
        "component_calculator_unit",//component name,using small case to avoid error
       {
        template:"#calculatorUnit",
        data:function(){
            return {
                value_in_data:this.value_in_props
            };
        },
        props:["label","value_in_props"],//prop name declare here
        methods:{
            sendOut:function(event){
                this.$emit("input_event",Number(event.currentTarget.value));
            }
        }
       });
    Vue.component(
        "component_calculator_unit_v1",//component name,using small case to avoid error
       {
        template:"#calculatorUnit_1",
        data:function(){
            return {};
        },
        props:["label","value"],//prop name declare here
        methods:{
            send:function(v){
                this.$emit("input",Number(v));

            }}
        
        });
    vueVM[10]=new Vue({
        el:"#vue_container_10",
        data:{
            price:10,
            shipping:20,
            discount:5
        },
        computed:{
            computeTotal:function(){
                return this.price+this.shipping-this.discount;
            }
        }
       }
    );
    Vue.component(
        "component_slot_test",//component name,using small case to avoid error
       {
        template:"#slot_test",
        data:function(){
            return {};
        },
        props:[],//prop name declare here
        methods:{}
        }
        );
     
        vueVM[11]=new Vue({
            el:"#vue_container_11",
            data:{
                price:10,
                shipping:20,
                discount:5
            },
            computed:{
                computeTotal:function(){
                    return this.price+this.shipping-this.discount;
                }
            }
           }
        );
        let bus_1=new Vue();
        Vue.component(
                "component_input_1",//component name,using small case to avoid error
               {
                template:"#comp_input_1",
                data:function(){
                    return {value:"Default_In_Input"};
                },
                props:[],//prop name declare here
                methods:{
                    send:function(){
                        this.$emit("send",this.value);
                        bus_1.$emit("send",this.value);
                    }
                }
                }
                ); 
        Vue.component(
                    "component_display_1",//component name,using small case to avoid error
                   {
                    template:"#comp_display_1",
                    data:function(){
                        return {value:"Default_In_Display"};
                    },
                    props:[],//prop name declare here
                    methods:{
                    },
                    created:function(){
                        let component=this;
                        //let value=this.value //error this.value is a string ,value is a copy,not a reference
                        bus_1.$on("send",function(v){
                            component.value=v;
                        });
                    }
                    }
                    ); 
    vueVM[12]=new Vue({
                        el:"#vue_container_12",
                        data:{
                        },
                        computed:{}
                       }
                    );

        Vue.component(
                        "readingmode_comp",//component name,using lower case to avoid error
                       {
                        template:"#reading_mode",
                        data:function(){
                            return {};
                        },
                        props:["title","author","date","category"],//prop name declare here
                        methods:{
                        },
                        created:function(){}
                        }
                        ); 
    
    vueVM[13]=new Vue({
                        el:"#vue_container_13",
                        data:{
                            status:"view",
                            title_input:{
                                text:"article title",
                                limit:50,
                                getRemain:function(){
                                    return this.limit-this.text.length;
                                },
                                
                                isBorderRed:function(){
                                    return this.getRemain()==0;
                                }
                            },
                            author:"article author",
                            article_main:"The killdeer (Charadrius vociferus) is a large plover found in the Americas. It was described and given its current scientific name in 1758 by Carl Linnaeus in the 10th edition of his Systema Naturae. Subspecies breed from southeastern Alaska and southern Canada to Mexico, in the West Indies, and in and around Peru. The non-breeding habitat includes coastal wetlands, beach habitats, and coastal fields. Although it is a shorebird, it does not necessarily nest close to water. Both parents incubate the young for 22 to 28 days on average. The killdeer primarily feeds on insects, although other invertebrates and seeds are eaten. It forages almost exclusively in fields, especially those with short vegetation and with cattle and standing water. It has a range of responses to predation by birds and mammals, including charging at intruders, which can be fatal for the killdeer. The species is declining but not yet threatened.",
                            date:getFormatedDate(),
                            category:"Tech",
                            category_color:"teal",
                            category_list:["Tech","Web","News","Science","Sports"]
                        },
                        computed:{
                            title_input_computed:{
                                get:function(){
                                    return this.title_input.text; 
                                },
                                set:function(v){
                                        if(v.length>50){
                                            v=v.substr(0,50);
                                        }
                                        this.title_input.text=v;
                                        return this.title_input.text;
                                    },

                                }
                            },
                        methods:{
                            switch_mode:function(){
                                     if(this.status=="view"){
                                        this.status="edit";
                                     }else{
                                        this.status="view";
                                     }
                                     this.date=getFormatedDate();
                            }
                        }
                       }
                    );
    Vue.component(
                        "component_input_sync",//component name,using small case to avoid error
                       {
                        template:"#comp_input_sync",
                        data:function(){
                            return {msg_sent:"msg_sent_default"};
                        },
                        props:["my_prop_1"],//using .sync, prop can be any name,not just "value" with v-model
                        methods:{
                            sendOutSync:function(){}//using a void function to avoid error
                        },
                        created:function(){
                            let comp=this;
                            comp.sendOutSync=function(event){// binding function in creating time ,using this closure ,avoid "this" problem
                                comp.msg_sent="msg_sent "+event.currentTarget.value;
                                comp.$emit("update:my_prop_1",event.currentTarget.value);////using .sync,custom event must be update:propname
                            }
                        }
                        }
                        ); 
    Vue.component(
                            "component_with_model",//component name,using small case to avoid error
                           {
                            template:"#comp_input_with_model",
                            model:{
                                prop:"my_prop_2",
                                event:"update_my_prop_2"
                            },//using model to bind to model (with any name,not just "value" and "input")
                            data:function(){
                                return {};
                            },
                            props:["my_prop_2"],//using .sync, prop can be any name,not just "value" with v-model
                            methods:{
                                sendOutSync:function(){}//using a void function to avoid error
                            },
                            created:function(){
                                let comp=this;
                                comp.sendOutSync=function(event){// binding function in creating time ,using this closure ,avoid "this" problem
                                    comp.msg_sent="msg_sent "+event.currentTarget.value;
                                    comp.$emit("update_my_prop_2",event.currentTarget.value);////using .sync,custom event must be update:propname
                                }
                            }
                            }
                            ); 
    vueVM[14]=new Vue({
            el:"#vue_container_14",
            data:{
                msg_1:"msg_1_in_Data",
                msg_2:"msg_2_in_Data"
            }
            
        });
        Vue.component(
            "componnent_with_scoped_slots",//component name,using small case to avoid error
           {
            template:"#comp_with_scoped_slots",
            data:function(){
                return {data_in_components_1:"data_in_components_1_output"};
            },
            props:[]//using .sync, prop can be any name,not just "value" with v-model
         
            }); 
        Vue.component(
                "componcomp_with_multiple_scoped_slots",//component name,using small case to avoid error
               {
                template:"#comp_with_multiple_scoped_slots",
                data:function(){
                    return {};
                },
                props:["item_list"]//using .sync, prop can be any name,not just "value" with v-model
             
                }); 
        vueVM[15]=new Vue({
            el:"#vue_container_15",
            data:{
                item_list_in_VM:[
                    {item_v1:"v1",item_v1_v:"v1_v"},
                    {item_v1:"v2",item_v1_v:"v2_v"},
                    {item_v1:"v3",item_v1_v:"v3_v"},
                    
                ]
            }
                    
        });
}