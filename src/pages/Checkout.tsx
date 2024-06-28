import { motion, AnimatePresence } from "framer-motion"
import Summary from "../components/Summary"
import { Link } from "react-router-dom"
import ThankyouModal from "../components/ThankyouModal"
import { RootState } from "../app/store"
import { useSelector, useDispatch } from "react-redux"
import { clickedThankToyModal } from '../features/buttons/clickedStateSlice'
import React, { useState } from 'react'

/* Define the form values interface */
interface FormValues {
  name: string
  email: string
  phone: string
  address: string
  zipCode: string
  city: string
  country: string
}

const Checkout: React.FC = () => {

  /* State for form values */
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: ''
  })

  /* Handle input changes */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  /* Selector to get the thank you modal click state from Redux store */
  const thankYouClick = useSelector((state: RootState) => state.clickedBtn.clickThankYouModal)
  /* Hook to get the dispatch function from Redux store */
  const dispatch = useDispatch()

  return (
    <>
      <div className="bg-secondary-200">
        <section className="mx-6 d:px-10 lg:px-40 w-auto md:py-32 pb-32">
          <div className="py-6">
            <Link
              to="/"
              className="mx-6 opacity-50 text-15 hover:cursor-pointer"
            >
              Go Back
            </Link>
          </div>
          
          <AnimatePresence>
            {thankYouClick && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 z--20"
                  onClick={() => dispatch(clickedThankToyModal())}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                <div className="flex justify-center items-center">
                  <ThankyouModal />
                </div>
              </>
            )}
          </AnimatePresence>
          
          <div className="flex flex-col justify-center items-center px-6 lg:flex-row lg:items-start">
            <form className="bg-white w-full rounded-md p-6">
              <legend className="text-black font-manrope font-bold text-28 text-start w-full tracking-1">
                CHECKOUT
              </legend>

              <section className="w-full flex flex-col justify-start gap-2 items-center">
                <h1 className="text-primary-100 text-13 tracking-1 w-full text-start font-bold">
                  BILLING DETAILS
                </h1>
                <fieldset className="flex flex-col w-full gap-1">
                  <label
                    className="w-full font-manrope text-[12px] font-bold text-black"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
                    type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} required
                  />
                </fieldset>
                <fieldset className="flex flex-col w-full gap-1">
                  <label
                    className="w-full font-manrope text-[12px] font-bold text-black"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
                    type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} required
                  />
                </fieldset>
                <fieldset className="flex flex-col w-full gap-1">
                  <label
                    className="w-full font-manrope text-[12px] font-bold text-black"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
                    type="tel" name="phone" placeholder="Phone" value={formValues.phone} onChange={handleChange} required
                  />
                </fieldset>
              </section>
              <section className="w-full flex flex-col justify-start gap-2 items-center">
                <h1 className="text-primary-100 text-13 tracking-1 w-full text-start font-bold">
                  SHIPPING INFO
                </h1>
                <fieldset className="flex flex-col w-full gap-1">
                  <label
                    className="w-full font-manrope text-[12px] font-bold text-black"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
                    type="text" name="address" placeholder="Address" value={formValues.address} onChange={handleChange} required
                  />
                </fieldset>
                <fieldset className="flex flex-col w-full gap-1">
                  <label
                    className="w-full font-manrope text-[12px] font-bold text-black"
                    htmlFor="zip"
                  >
                    ZIP Code
                  </label>
                  <input
                    className="w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
                    type="text" name="zipCode" placeholder="Zip Code" value={formValues.zipCode} onChange={handleChange} required
                  />
                </fieldset>
                <fieldset className="flex flex-col w-full gap-1">
                  <label
                    className="w-full font-manrope text-[12px] font-bold text-black"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
                    type="text" name="city" placeholder="City" value={formValues.city} onChange={handleChange} required
                  />
                </fieldset>
                <fieldset className="flex flex-col w-full gap-1">
                  <label
                    className="w-full font-manrope text-[12px] font-bold text-black"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    className="w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
                    type="text" name="country" placeholder="Country" value={formValues.country} onChange={handleChange} required
                  />
                </fieldset>
              </section>

              <section className="w-full flex flex-col justify-start gap-2 items-center">
                <h1 className="text-primary-100 text-13 tracking-1 w-full text-start font-bold">
                  PAYMENT DETAILS
                </h1>

                <fieldset className="flex flex-col w-full gap-1">
                  <legend className="w-full font-manrope text-[12px] font-bold text-black">
                    Payment Method
                  </legend>
                  <section>
                    <label
                      className="flex items-center"
                      htmlFor="paypal"
                    >
                      <input
                        className="mr-2 accent-primary-100"
                        type="radio"
                        id="paypal"
                        name="method"
                        value="paypal"
                      />
                      <span className="font-manrope text-[12px] font-bold text-black">
                        Paypal
                      </span>
                    </label>
                  </section>
                </fieldset>

                <fieldset className="flex flex-col w-full gap-1 pb-6">
                  <section>
                    <label
                      className="flex items-center"
                      htmlFor="credit"
                    >
                      <input
                        className="mr-2 accent-primary-100"
                        type="radio"
                        id="credit"
                        name="method"
                        value="credit"
                      />
                      <span className="font-manrope text-[12px] font-bold text-black">
                        Credit Card
                      </span>
                    </label>
                  </section>
                </fieldset>
              </section>
            </form>
            {/* Summary component */}
            <Summary />
          </div>
        </section>
      </div>
    </>
  )
}

export default Checkout