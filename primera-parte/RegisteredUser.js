class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    if (this.services.length > 0) {
      this.services.forEach((service) => {
        let content = service.getContent();
        if (content.aditionalFee && content.aditionalFee > 0) {
          total += content.aditionalFee;
        }

        total += service.price;

      });
    }
    return total;
  }
}
