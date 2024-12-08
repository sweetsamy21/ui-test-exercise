import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/One-time loan payment/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Sub Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fill out the form below to complete your payment/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Account number field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loan account number/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Type of account field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Type of account/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Routing number field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Routing number/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Confirm Bank Account number field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Confirm Bank Account number/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Make Payment button field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Make Payment/i);
  expect(linkElement).toBeInTheDocument();
});
