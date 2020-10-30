import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
describe('Tests for the checkout form', () => {

    test("form header renders", () => {
        render(<CheckoutForm />)
        const headerCheckoutForm = screen.findByText(/checkout form/i)
    });
    
    test("form shows success message on submit with form details", async () => {
        render(<CheckoutForm />)
        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const addressInput = screen.getByLabelText(/address/i);
        const cityInput = screen.getByLabelText(/city/i);
        const stateInput = screen.getByLabelText(/state/i);
        const zipInput = screen.getByLabelText(/zip/i);
        const button = screen.getByRole('button');
    
        fireEvent.change(firstNameInput, { target: { value:'Krista' } } )
        fireEvent.change(lastNameInput, { target: { value:'Verleger' } } )
        fireEvent.change(addressInput, { target: { value:'1515 Fake St' } } )
        fireEvent.change(cityInput, { target: { value:'Madison' } } )
        fireEvent.change(stateInput, { target: { value:'Wisconsin' } } )
        fireEvent.change(zipInput, { target: { value:'53704' } } )
        fireEvent.click(button)
    
        const newFirstName = await screen.findAllByText(/Krista/i); 
        const newLastName = await screen.findAllByText(/Verleger/i); 
        const newAddress = await screen.findAllByText(/1515 fake st/i); 
        const newCity = await screen.findAllByText(/madison/i);
        const newState = await screen.findAllByText(/wisconsin/i); 
        const newZip = await screen.findAllByText(/53704/i);
        const successMessage = screen.getAllByTestId("successMessage");
        });
})
