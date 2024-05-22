function hryap(goodmorning,oftternoon){
    setTimeout(() => {
      console.log('happy your day ',goodmorning);
      if(oftternoon ){
        oftternoon();
      }  
    }, 2000);
};
hryap(
    1,()=>{
        hryap(
            2,()=>{
                hryap(
                    3,()=>{
                        hryap(4,
                            ()=>{
                                hryap(5,
                                    ()=>{
                                        hryap(6,
                                            ()=>{
                                                hryap(4,
                                                    ()=>{
                                                        hryap(99,
                                                            ()=>{
                                                            hryap(89
                                                            )
                                                        }
                                                      )
                                                    }
                                                )
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)