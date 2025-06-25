import { authStore } from "@/store/auth.store";

export function HomePage() {
  const credentials = authStore().getCredentials();
  console.log("credenciais: ", credentials);
  return (
    <div>
      <p>HOMEPAGE</p>
    </div>
  );
}
