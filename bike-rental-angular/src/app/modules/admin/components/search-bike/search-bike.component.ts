import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AdminService } from '../../services/admin.service'

@Component({
  selector: 'app-search-bike',
  templateUrl: './search-bike.component.html',
  styleUrl: './search-bike.component.scss'
})
export class SearchBikeComponent {
  searchBikeForm!: FormGroup
  listOfOption: Array<{ label: string; value: string }> = []
  listOfBrands = ['Harley-Davidson', 'Yamaha', 'Honda', 'Kawasaki', 'Ducati', 'Suzuki', 'BMW', 'Triumph', 'KTM', 'Royal Enfield', 'Bajaj', 'Indian Motorcycle', 'Aprilia', 'Moto Guzzi', 'Other']
  listOfType = ['Sportbike', 'Touring Bike', 'Adventure Bike', 'Dirt Bike', 'Cafe Racer', 'Chopper', 'Dual-Sport Bike', 'Electric Bike', 'Other']
  listOfColor = ['Red', 'Blue', 'Brown', 'Green', 'Black', 'White', 'Silver', 'Other']
  listOfTransmission = ['Manual', 'Semi-Automatic']
  isSpinning = false
  bikes: any[] = []

  constructor(
    private fb: FormBuilder,
    private service: AdminService
  ) {
    this.searchBikeForm = this.fb.group({
      brand: [null],
      type: [null],
      transmission: [null],
      color: [null]
    })
  }

  searchBike() {
    this.isSpinning = true
    this.service.searchBike(this.searchBikeForm.value).subscribe(
      res => {
        this.isSpinning = false

        const bikeDtoList = res.bikeDtoList

        bikeDtoList.forEach((bike: any) => {
          bike.processedImage = `data:image/jpeg;base64,${bike.returnedImage}`
          this.bikes.push(bike)
        })
      },
      err => {
        this.isSpinning = false
      }
    )
  }
}
