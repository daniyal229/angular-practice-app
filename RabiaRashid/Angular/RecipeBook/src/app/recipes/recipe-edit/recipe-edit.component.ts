import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import {NgForm} from '@angular/forms'
import {FormGroup, FormControl, FormArray,Validators} from '@angular/forms'
import {Observable} from 'rxjs/Observable';
import {RecipeService} from '../recipe.service'
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
mode:string;
recForm:FormGroup;
recIndex:number;


// status:string[]=['stable','critical','finished']
// // pro:Promise<any>;
//   // onSubmit(form:NgForm){
//   //   console.log('submitted')
//   //   console.log(form.value)
//   // }
// projForm:FormGroup;

  constructor(private route:ActivatedRoute,private router:Router, private recService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      if(params['id']===undefined){
        this.mode='new mode';
      }
      else{
        this.mode='edit mode';
        this.recIndex=params['id'];
      }
      this.initForm()
      console.log(this.mode)
    })
    // this.projForm=new FormGroup({
    //   projName: new FormControl(null, Validators.required, this.projNameCheck),
    //   userEmail: new FormControl(null,[Validators.required, Validators.email]),
    //   projStatus: new FormControl('critical')
    // });
  }

  initForm(){
    let recData={name:'',url:'',desc:'', recIng:new FormArray([])};

    if(this.mode==='edit mode')
    {  
      const recipe=this.recService.getRecipeByIndex(this.recIndex);
      recData.name=recipe.name;
      recData.url=recipe.imgPath;
      recData.desc=recipe.desc;
      if(recipe['ings']){
        console.log(recipe['ings']);
        for(let ing of recipe['ings']){
          recData.recIng.push(new FormGroup({
          name:new FormControl(ing.name, Validators.required),
          amount:new FormControl(ing.amount, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
        }))
        }
      }
    }
    console.log(recData)

    this.recForm=new FormGroup({
      name:new FormControl(recData.name, Validators.required),
      imgUrl:new FormControl(recData.url, Validators.required),
      desc:new FormControl(recData.desc, Validators.required),
      ings:recData.recIng
    })
  }

  onSubmit(){
    // console.log(this.recForm.value)
    if(this.mode==='edit mode'){
      this.recService.updateRecipe(this.recIndex,new Recipe(this.recForm.value.name,
        this.recForm.value.desc,
        this.recForm.value.imgUrl,
        this.recForm.value.ings));
    }
    else{
      this.recService.addRecipe(new Recipe(this.recForm.value.name,
        this.recForm.value.desc,
        this.recForm.value.imgUrl,
        this.recForm.value.ings));
    }
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onCancelEditing(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onAddIngredients(){
    (<FormArray>this.recForm.get('ings')).push(new FormGroup({
      name:new FormControl(null,Validators.required),
      amount:new FormControl(null,Validators.pattern("^[1-9]+[0-9]*$"))
    }))
  }

  onDeleteIngredient(ind:number){
    (<FormArray>this.recForm.get('ings')).removeAt(ind);
  }
  // onSubmit(){
  //   console.log(this.projForm)
  // }

  // projNameCheck(control:FormControl):{[s:string]:boolean}{
  //   if(control.value==='Test')
  //     return {'invalidProjectName':true}
  //   else
  //     return null
  // }

  // projNameCheck(control:FormControl):Promise<any> | Observable<any> {
  //   console.log('kuyiu')
  //   const pro=new Promise<any>((resolve,reject)=>{
  //   setTimeout(()=>{
  //     if(control.value==='Test'){
  //       console.log('INVALID')
  //       resolve({'invalidProjectName':true})
  //     }
  //     else{
  //       console.log('VALID')
  //       resolve(null)
  //     }
  //   },1000)
  //   });
  //   return pro;
  // }

   


}
