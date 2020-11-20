class PriceModel {
    price: string;
    features: string[];
    signUpBtnText: string;

    constructor(price: string, features: string[], signUpBtnText: string){
        this.price = price;
        this.features = features;
        this.signUpBtnText = signUpBtnText;
    }
}

export default PriceModel;