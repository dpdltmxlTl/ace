/*
 * ASTC Product Detail Page
 * Redirects to Products page with appropriate category
 */
import { useEffect } from "react";
import { useParams, useLocation } from "wouter";

export default function ProductDetail() {
  const params = useParams<{ id?: string }>();
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate("/products");
  }, [navigate]);

  return null;
}
