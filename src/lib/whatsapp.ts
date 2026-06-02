import type { CartItem } from "@/store/cartStore";

const WHATSAPP_NUMBER = "923126762123";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildSingleProductOrderMessage(
  productName: string,
  quantity = 1,
  note?: string
): string {
  return [
    "Assalam o Alaikum, I want to place an order.",
    `Item: ${productName}`,
    `Quantity: ${quantity}`,
    note ? `Note: ${note}` : "",
    "",
    "Please confirm availability. Thanks.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildCartOrderMessage(
  items: CartItem[],
  customer: {
    name?: string;
    phone?: string;
    orderType?: "delivery" | "pickup";
    address?: string;
    notes?: string;
  } = {}
): string {
  const lines = [
    "Assalam o Alaikum, I want to place this order:",
    ...items.map((item, index) => {
      const custom = item.customNote ? ` (Note: ${item.customNote})` : "";
      return `${index + 1}. ${item.product.name} x${item.quantity}${custom}`;
    }),
    "",
    customer.name ? `Name: ${customer.name}` : "",
    customer.phone ? `Phone: ${customer.phone}` : "",
    customer.orderType ? `Order Type: ${customer.orderType}` : "",
    customer.address ? `Address: ${customer.address}` : "",
    customer.notes ? `Extra Notes: ${customer.notes}` : "",
    "",
    "Please confirm this order on WhatsApp.",
  ];

  return lines.filter(Boolean).join("\n");
}
