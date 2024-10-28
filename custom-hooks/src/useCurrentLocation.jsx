import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [positionError, setError] = useState(null);
  const [positionLoading, setLoading] = useState(false);
  const [position, setPosition] = useState(null);

  useEffect(getCurrentPosition, []);

  function getCurrentPosition() {
    setLoading(true);
    if (!navigator || !navigator.geolocation) {
      setError({
        message: "è impossibile ottenere la posizione",
      });
      setLoading(false);
      return null;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setError(null);
      },
      (positionError) => {
        setError(positionError);
      }
    );
    setLoading(false);
  }

  return { positionError, positionLoading, position, getCurrentPosition };
}
