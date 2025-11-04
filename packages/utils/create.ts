// block element modifier bem
// qe-button
// qe-button__icon--small
const _bem=(prefix:string,block:string,element?:string,modifier?:string)=>{
    if(block){
        prefix+=`-${block}`;
    }
    if (element){
        prefix+=`__${element}`;
    }
    if (modifier){
        prefix+=`--${modifier}`;
    }
    return prefix;
}
const createBEM = (prefix: string) => {

  const b = (block: string = '') => createBEM(_bem(prefix, block));

  const e = (element: string = '') =>
    element ? createBEM(_bem(prefix, '', element)) : createBEM(prefix);

  const m = (modifier: string = '') =>
    modifier ? createBEM(_bem(prefix, '', '', modifier)) : createBEM(prefix);

  const toString = () => prefix;

  const is=(name:string,state:boolean=true)=>{
    return state?`is-${name}`:'';
  }

  return { b, e, m, toString,is };
};
export const createNamespace=(name:string)=>{
    const prefix=`qe-${name}`;
    return createBEM(prefix);
}

